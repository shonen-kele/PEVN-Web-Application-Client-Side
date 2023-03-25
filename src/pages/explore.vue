<script setup>
  import {ref, onMounted, nextTick} from 'vue'
  import {useRouter} from 'vue-router'
  import {useArgumentStore} from '@/stores/argument'

  const store = useArgumentStore()
  const router = useRouter()
  const columns = ref(null)
  const vCards = ref(null)
  const argumentContainer = ref([
    {id:1, arguments:[]},
    {id:2, arguments:[]},
    {id:3, arguments:[]},
    {id:4, arguments:[]}
  ])
  let offset = 0
  for (let index = 0; index < argumentContainer.value.length; index++) {
    const element = argumentContainer.value[index];
    offset += element.arguments.length
  }
  const {data} = await useFetch('/api/displayArguments',{
    method:'POST',
    body:{
      offset:offset
    }
  })
  let args = data.value.arguments
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
  })
</script>

<template>
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
      :title="argument.title"
      :subtitle="argument.email"
      :text="argument.argument"
      ref="vCards"
      variant="tonal">
        <v-card-actions>
          <v-flex>
            <v-btn variant="text" @click="()=>{
              store.argumentTitle = argument.title
              store.argumentBody = argument.argument
              store.email = argument.email
              router.push(`/arena-${argument.id}`)
            }">Rebute</v-btn>
            <v-btn variant="text">Entail</v-btn>
            <v-btn variant="text">Comment</v-btn>
          </v-flex>
        </v-card-actions>
      </v-card>
    </div>
  </div>
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