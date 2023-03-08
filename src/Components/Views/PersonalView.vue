<script setup>
  import { ref, onUpdated } from 'vue';
  import {sharedEmail} from '@/states/LoginState.js'
  import {router} from '@/router/index.js'
  import ArgumentService from '@/services/ArgumentService.js'

  let argumentTitle = ref()
  let argumentBody = ref()
  let error = ref()
  let message = ref()

  if(!sharedEmail.value){router.push('/login')}

  async function createArgument(){
    let response = await ArgumentService.createArgument({
      email: sharedEmail.value,
      title: argumentTitle.value,
      argument: argumentBody.value
    })
    error.value = response.data.error
    message.value = response.data.message
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
  </div>
  
</template>

<style scoped>

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