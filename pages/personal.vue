<script setup>
  import { ref,onMounted } from 'vue';
  import {sharedEmail} from '@/states/LoginState.js'
  import ArgumentService from '@/services/ArgumentService.js'
  import {useRouter} from 'vue-router'
  const router = useRouter()

  const argumentTitle = ref()
  const argumentBody = ref()
  const error = ref()
  const message = ref()
  const personalArguments = ref([])
  const isOpen = ref(false)

  if(!sharedEmail.value){
    router.push('/login')
  }

  async function displayPersonalArguments(){
    const result = await ArgumentService.displayPersonalArguments({
      email: sharedEmail.value
    })
    console.log(result)
    console.log(result.data.arguments)
    result.data.arguments.forEach(instance => {
      if(personalArguments.value.indexOf(instance)==-1){
        personalArguments.value.push(instance)
      }
    });
  }

  onMounted(displayPersonalArguments)

  async function createArgument(){
    let response = await ArgumentService.createArgument({
      email: sharedEmail.value,
      title: argumentTitle.value,
      argument: argumentBody.value
    })
    error.value = response.data.error
    message.value = response.data.message
    displayPersonalArguments()
  }

  function toggleArguments(){
    isOpen.value = !isOpen.value
  }
</script>

<template>
  <div id="argument-inputs">
    <input 
      id="argument-title" 
      placeholder="Argument Title"
      v-model="argumentTitle"
      class="argument-class"
    />
  
    <div v-if="argumentTitle">{{ argumentTitle.length }}/100</div>

    <textarea 
      id="argument-body" 
      placeholder="Enter the argument you are making"
      v-model="argumentBody"
      class="argument-class"
    />
    <br/>


    <div v-if="argumentBody">{{ argumentBody.length }}/5000</div>

    <button 
      id="add-argument-button"
      @click="createArgument"
      class="argument-class"
    >Add Argument</button>
    <br/>

    <div v-if="error">{{ error }}</div>
    <div  v-if="message">{{ message }}</div>
    <br/>
    <button @click="toggleArguments">View Argumments</button>
    <div id="personal-arguments-container" v-if="isOpen" >
      <v-card v-for="argument in personalArguments"
      :key="argument.id"
      :title="argument.title"
      :text="argument.argument"
      variant="tonal"></v-card>
    </div>
  </div>
  
</template>

<style scoped>

  .v-card{
    margin: 10px;
  }

  div{
    display: flex;
    flex-direction: column;
    align-content: center;
  }

  #argument-body{
    height: 500px;
    width: 500px;
    color: azure;
    text-align: left;
  }
  
  #argument-title{
    width: 450px;
    margin-bottom: 10px;
    color:azure;
    text-align: center;
  }

  button{
    border-style: solid;
  }

  #add-argument-button{
    width: 100px;
  }

  input, textarea{
    border-style: solid;
    border-color: rgb(53, 97, 114);
    background-color: rgb(28, 47, 48);
    border-radius: 5px;
  }

  #argument-inputs{
    margin-top: calc(4vh + 10px);
  }
  .argument-class, div{
    margin-left: auto;
    margin-right: auto;
  }
</style>