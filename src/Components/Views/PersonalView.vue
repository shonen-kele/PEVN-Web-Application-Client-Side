<script setup>
  import { ref,watch } from 'vue';
  let argumentTitle = ref()
  let argumentBody = ref()
  let argumentLength = ref()
  let error = ref()
  let message = ref()

  watch(argumentBody,()=>{
    argumentLength.value = argumentBody.value.length
    if(argumentBody.value == ''){argumentBody.value = undefined}
  })

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
    />
      

    <input 
      id="argument-body" 
      placeholder="Enter the argument you are making"
      v-model="argumentBody"
    />
    <br/>

    <div v-if="argumentBody">{{ argumentBody }}/5000</div>
    <button 
      id="add-argument-button"
      @click="createArgument"
    >Add Arena</button>
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
    margin-left:auto;
    margin-right: auto;
  }

  #argument-body{
    height: 500px;
    width: 500px;
  }
  
  #argument-title{
    width: 450px;
    margin-left:auto;
    margin-right:auto;
    margin-bottom: 10px;
  }

  button{
    border-style: solid;
  }

  #add-argument-button{
    width: 100px;
    margin-left: auto;
    margin-right: auto;
  }

  input{
    border-style: solid;
    border-color: rgb(53, 97, 114);
    background-color: rgb(28, 47, 48);
    border-radius: 5px;
    text-align: center;
  }

  #argument-inputs{
    margin-top: 4vh;
    margin-left: auto;
    margin-right: auto;
  }
</style>