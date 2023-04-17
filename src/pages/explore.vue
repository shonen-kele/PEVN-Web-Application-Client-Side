<script setup>
  import {ref, onMounted, nextTick, getCurrentInstance, toRaw} from 'vue'
  import {useRouter} from 'vue-router'
  import {useArgumentStore} from '@/stores/argument'
  import {useLoginStore} from '@/stores/login'
  

  const argumnetStore = useArgumentStore()
  const loginStore = useLoginStore()
  const router = useRouter()
  const columns = ref(null)
  const vCards = ref([])
  const nuxtApp = useNuxtApp()
  const parentHovered = ref(false)
  const currentInstance = getCurrentInstance()
  const argumentContainer = ref([
    {id:1, arguments:[]},
    {id:2, arguments:[]},
    {id:3, arguments:[]},
    {id:4, arguments:[]}
  ])
  const toolTipText = ref()
  const snackbar = ref(false)
  const snackbarMessage = ref()

  console.log('login state explore',loginStore.loginState)

  let offset = 0
  for (let index = 0; index < argumentContainer.value.length; index++) {
    const element = argumentContainer.value[index];
    offset += element.arguments.length
  }
  const {data} = await nuxtApp.$api.get('/argument',{
    params:{
      offset:offset
    }
  })
  let args = data.arguments
  for(let index = 0; index<4; index++){
    let argument = args[index]
    argumentContainer.value[index].arguments.push(argument)
  }
  onMounted(async ()=>{
    let emptySpaces = []
    for(let index=4;index<args.length;index++){
      for(let colIndex=0;colIndex<4;colIndex++){
        const columnBottom = columns.value[colIndex].getBoundingClientRect().bottom
        const childBottom = columns.value[colIndex].lastElementChild.getBoundingClientRect().bottom
        emptySpaces[colIndex] = columnBottom - childBottom
      }
      let smallestSpace = Math.max.apply(Math, emptySpaces)
      argumentContainer.value[emptySpaces.indexOf(smallestSpace)].arguments.push(args[index])
      await nextTick()
    }

    console.log(vCards.value)
  })

  async function watchArgument(argumentId){
    const {data} = await nuxtApp.$api.put('/user/watch',{
      email:loginStore.emailState,
      id:argumentId
    })
    snackbarMessage.value = data.message
  }

  function showTooltip(text){
    toolTipText.value = text
    parentHovered.value = true
  }
</script>

<template>
  <section id="explore-root">
    <h1>The explore page</h1>
    <v-btn @click="()=>displayArguments">Refresh page</v-btn>
    
    <div id="argument-container">
      <div 
      v-for="column in argumentContainer" 
      :key="column.id"
      ref="columns"
      class="column">
        <v-card 
        v-for="argument in column.arguments" 
        :subtitle="argument.email"
        :text="argument.argument"
        :title="argument.title"
        ref="vCards"
        @mouseover="showTooltip(argument.title)"
        @mouseleave="parentHovered=false"
        >
          <v-card-actions>
            <v-btn variant="text" @click="()=>{
              router.push(`/arena-${argument.id}`)
            }">View</v-btn>
            <v-btn 
              variant="text"
              v-if="loginStore.loginState"
              @click="()=>{
                watchArgument(argument.id)
                snackbar = true
              }"
            >
            Watch
            </v-btn>
          </v-card-actions>
        </v-card>
        
      </div>
      <tooltip
        v-if="parentHovered"
        :text="toolTipText"
      />
      <v-snackbar
        v-model="snackbar"
        timeout="2000"
      >
        {{snackbarMessage}}
        <template v-slot:actions>
          <v-btn
            @click="snackbar = false"
          >Close</v-btn>
        </template>
      </v-snackbar>
    </div>
  </section>
  
</template>

<style scoped>
  #argument-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  #argument-container div{
    display: flex;
    flex-direction: column;
    width:400px;
    margin: 10px;
  }

  .v-card-actions{
    display: flex;
    flex-direction: row;
  }

  .v-card-actions .v-btn{
    margin:5px;
    color: rgb(85, 42, 37);
  }
</style>