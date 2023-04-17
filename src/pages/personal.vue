<script setup>
  import { nextTick, ref, watch } from 'vue';
  import {useRouter} from 'vue-router'
  import { useLoginStore } from '@/stores/login'
  
  const loginStore = useLoginStore()
  const router = useRouter()
  const argumentTitle = ref()
  const argumentBody = ref()
  const error = ref()
  const error2 = ref()
  const message = ref()
  const personalArguments = ref([])
  const isOpen = ref(false)
  const isEditting = ref(false)
  const editId = ref()
  const nuxtApp = useNuxtApp()

  async function displayPersonalArguments(){
    const {data} = await nuxtApp.$api.get('/argument',{
      params:{
        email: loginStore.emailState
      }
    })
    console.log('personal arguments data',data)
    error2.value = data.errorMessage
    personalArguments.value = []
    if(data.arguments){
      data.arguments.forEach(argument => {
        personalArguments.value.push(argument)
      })
    }
  }

  watch(loginStore.tokenState,()=>{
    loginStore.fetchTokenVerification()
  })

  onBeforeMount(async ()=>{
    await nextTick()
    loginStore.fetchTokenVerification()
    console.log('token',loginStore.tokenState.token)
    console.log('login state',loginStore.loginState)
    if(!loginStore.loginState){
      router.push('/authentication')
    } else {
      displayPersonalArguments()
    }
  })
  

  async function createArgument(){
    const {data} = await nuxtApp.$api.post('/argument',{
      email: loginStore.emailState,
      title: argumentTitle.value,
      argument: argumentBody.value
    })
    error.value = data.value.errorMessage
    message.value = data.value.message
    displayPersonalArguments()
  }

  function toggleArgumentsView(){
    isOpen.value = !isOpen.value
  }

  async function destroyArgument(idNumber){
    nuxtApp.$api.delete('/destroyArgument',{
      params:{
        id:idNumner
      }
    })
    displayPersonalArguments()
  }

  function Edit(id,argument,title){
    isEditting.value = true
    editId.value = id
    argumentBody.value = argument
    argumentTitle.value = title
    routerViewContainer.value.scrollTop = 0
  }

  async function confirmEdit(){
    const {data} = await nuxtApp.$api.put('/argument',{
      params:{
        id: editId.value,
        title: argumentTitle.value,
        argument: argumentBody.value
      }
    })
    error.value = data.errorMessage
    message.value = data.message
    displayPersonalArguments()
  }
</script>

<template>
  <section id="argument-inputs">
    <!--text field/title-->
    <v-text-field 
      id="argument-title" 
      v-model="argumentTitle"
      placeholder="Argument Title"
      class="argument-class"
    />
  
    <!--word counter-->
    <div v-if="argumentTitle">
      {{ argumentTitle.length }}/100
    </div>

    <!--Text area-->
    <v-textarea 
      id="argument-body"
      v-model="argumentBody"
      placeholder="Enter the argument you are making"
      class="argument-class"
      rows="20"
    />

    <!--word counter-->
    <div v-if="argumentBody">
      {{ argumentBody.length }}/5000
    </div>

    <!--button for adding argument-->
    <v-btn
      v-if="!isEditting" 
      id="add-argument-button"
      class="argument-class"
      variant="tonal"
      @click="createArgument"
    >
      Add Argument
    </v-btn>

    <!--buttons for editing-->
    <div
      v-if="isEditting"
      id="edit-buttons"
    >
      <v-btn
        variant="tonal"
        @click="() => confirmEdit()"
      >
        Confirm Edit
      </v-btn>
      <v-btn
        variant="tonal"
        @click="() => {
          isEditting = false
          argumentBody=null
          argumentTitle=null
        }"
      >
        Cancel Edit
      </v-btn>
    </div>

    <!--messages-->
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="message">
      {{ message }}
    </div>
    <br>

    <!--To toggle arguments view-->
    <v-btn 
      variant="tonal"
      @click="toggleArgumentsView"
    >
      View Argumments
    </v-btn>

    <div
      v-if="isOpen"
      id="personal-arguments-container"
    >
      <div v-if="error2">
        You have made no personal arguments yet
      </div>
      <v-card
        v-for="argument in personalArguments"
        v-else
        :key="argument.id"
        :title="argument.title"
        :text="argument.argument"
        variant="tonal"
      >
        <v-card-actions>
          <v-btn
            @click="() => 
            {if(!isEditting){
              destroyArgument(argument.id)
            }}"
          >
            Delete
          </v-btn>
          <v-btn 
            @click="Edit(argument.id,argument.argument,argument.title)"
          >
            Edit
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </section>
</template>

<style scoped>

  .v-card{
    margin: 10px;
    color:rgb(85, 42, 37);
  }

  div{
    display: flex;
    flex-direction: column;
    align-content: center;
  }

  .v-textarea{
    width: 500px;
    color: rgb(85, 42, 37);
    text-align: left;
  }
  
  .v-text-field{
    width: 450px;
    margin-bottom: 10px;
    color: rgb(85, 42, 37);
    text-align: center;
  }

  .v-btn{
    width: 200px;
    margin: 10px;
  }

  .v-card-actions{
    display: flex;
    flex-direction: row;
    width: 80px;
  }

  #edit-buttons{
    flex-direction: row;
  }

  #personal-arguments-container{
    flex-direction: row;
    flex-wrap: wrap;
  }

  #argument-inputs{
    margin-top: calc(4dvh + 10px);
  }
  .argument-class, div{
    margin-left: auto;
    margin-right: auto;
  }
</style>