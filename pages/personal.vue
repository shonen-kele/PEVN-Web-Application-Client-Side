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
  } else {
    onMounted(displayPersonalArguments)
  }

  async function displayPersonalArguments(){
    const result = await ArgumentService.displayPersonalArguments({
      email: sharedEmail.value
    })
    console.log(result)
    console.log(result.data.arguments)
    personalArguments.value = []
    result.data.arguments.forEach(resultArgument => {
      personalArguments.value.push(resultArgument)
    });
  }

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

  function toggleArgumentsView(){
    isOpen.value = !isOpen.value
  }

  async function destroyArgument(idNumber){
    const result = await ArgumentService.destroyArgument({
      id: idNumber
    })
    displayPersonalArguments()
  }
</script>

<template>
  <div id="argument-inputs">
    <v-text-field 
      id="argument-title" 
      placeholder="Argument Title"
      v-model="argumentTitle"
      class="argument-class"
    />
  
    <div v-if="argumentTitle">{{ argumentTitle.length }}/100</div>

    <v-textarea 
      id="argument-body" 
      placeholder="Enter the argument you are making"
      v-model="argumentBody"
      class="argument-class"
      rows="20"
    />

    <div v-if="argumentBody">{{ argumentBody.length }}/5000</div>

    <v-btn 
      id="add-argument-button"
      @click="createArgument"
      class="argument-class"
      variant="tonal"
    >Add Argument</v-btn>
    <br/>

    <div v-if="error">{{ error }}</div>
    <div  v-if="message">{{ message }}</div>
    <br/>

    <v-btn 
      @click="toggleArgumentsView"
      variant="tonal"
    >View Argumments</v-btn>
    <div id="personal-arguments-container" v-if="isOpen" >
      <v-card v-for="argument in personalArguments"
      :key="argument.id"
      :title="argument.title"
      :text="argument.argument"
      variant="tonal"
    >
      <v-card-actions>
        <v-btn @click="destroyArgument(argument.id)">
          Delete
        </v-btn>
        <v-btn>
          Edit
        </v-btn>
      </v-card-actions>
    </v-card>
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

  .v-textarea{
    width: 500px;
    color: azure;
    text-align: left;
  }
  
  .v-text-field{
    width: 450px;
    margin-bottom: 10px;
    color:azure;
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

  input, textarea{
    border-style: solid;
    border-color: rgb(53, 97, 114);
    background-color: rgb(28, 47, 48);
    border-radius: 5px;
  }

  #personal-arguments-container{
    flex-direction: row;
    flex-wrap: wrap;
  }

  #argument-inputs{
    margin-top: calc(4vh + 10px);
  }
  .argument-class, div{
    margin-left: auto;
    margin-right: auto;
  }
</style>