<script setup>
  import { ref,onMounted,computed } from 'vue';
  import {sharedEmail} from '@/states/LoginState.js'
  import ArgumentService from '@/services/ArgumentService.js'
  import {useRouter} from 'vue-router'
  import {routerViewContainer} from '@/states/accessElements'

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

  if(!sharedEmail.value){
    router.push('/login')
  } else {
    onMounted(displayPersonalArguments)
  }

  async function displayPersonalArguments(){
    const {data} = await useFetch('/api/displayPersonalArguments',{
      method:'POST',
      body:{
        email:sharedEmail.value
      }
    })
    error2.value = data.value.errorMessage
    personalArguments.value = []
    data.value.arguments.forEach(argument => {
      personalArguments.value.push(argument)
    });
  }

  async function createArgument(){
    const {data} = await useFetch('/api/createArgument',{
      method:'POST',
      body:{
        email: sharedEmail.value,
        title: argumentTitle.value,
        argument: argumentBody.value
      }
    })
    error.value = data.value.errorMessage
    message.value = data.value.message
    displayPersonalArguments()
  }

  function toggleArgumentsView(){
    isOpen.value = !isOpen.value
  }

  async function destroyArgument(idNumber){
    const {data} = await useFetch('/api/destroyArgument',{
      method:'POST',
      body:{
        id: idNumber
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
    const {data} = await useFetch('/api/confirmEdit',{
      method:'POST',
      body:{
        id: editId.value,
        title: argumentTitle.value,
        argument: argumentBody.value
      }
    })
    error.value = data.value.errorMessage
    message.value = data.value.message
    displayPersonalArguments()
  }
</script>

<template>
  <div id="argument-inputs">
    <!--text field/title-->
    <v-text-field 
      id="argument-title" 
      placeholder="Argument Title"
      v-model="argumentTitle"
      class="argument-class"
    />
  
    <!--word counter-->
    <div v-if="argumentTitle">{{ argumentTitle.length }}/100</div>

    <!--Text area-->
    <v-textarea 
      id="argument-body"
      placeholder="Enter the argument you are making"
      v-model="argumentBody"
      class="argument-class"
      rows="20"
    />

    <!--word counter-->
    <div v-if="argumentBody">{{ argumentBody.length }}/5000</div>

    <!--button for adding argument-->
    <v-btn
      v-if="!isEditting" 
      id="add-argument-button"
      @click="createArgument"
      class="argument-class"
      variant="tonal"
    >Add Argument</v-btn>

    <!--buttons for editing-->
    <div id="edit-buttons" v-if="isEditting">
      <v-btn
        variant="tonal"
        @click="() => confirmEdit()"
      >Confirm Edit</v-btn>
      <v-btn
        variant="tonal"
        @click="() => {
          isEditting = false
          argumentBody=null
          argumentTitle=null
        }"
      >Cancel Edit</v-btn>
    </div>

    <!--messages-->
    <div v-if="error">{{ error }}</div>
    <div  v-if="message">{{ message }}</div>
    <br/>

    <!--To toggle arguments view-->
    <v-btn 
      @click="toggleArgumentsView"
      variant="tonal"
    >View Argumments</v-btn>

    <div id="personal-arguments-container" v-if="isOpen" >
      <div v-if="error2">You have made no personal arguments yet</div>
      <v-card v-else v-for="argument in personalArguments"
      :key="argument.id"
      :title="argument.title"
      :text="argument.argument"
      variant="tonal"
    >
      <v-card-actions>
        <v-btn @click="() => 
          {if(!isEditting){
            destroyArgument(argument.id)
          }}"
        >
          Delete
        </v-btn>
        <v-btn 
          @click="Edit(argument.id,argument.argument,argument.title)">
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
    color:rgb(85, 42, 37)
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
    margin-top: calc(4vh + 10px);
  }
  .argument-class, div{
    margin-left: auto;
    margin-right: auto;
  }
</style>