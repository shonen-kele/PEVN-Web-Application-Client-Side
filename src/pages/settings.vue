<script setup>
    import {ref} from 'vue'
    import {sharedEmail} from '@/states/LoginState.js'
    import {useRouter} from 'vue-router'
    import AuthenticationService from '@/services/AuthenticationService.js'

    const router = useRouter()
    const wishToDelete = ref(false)
    const passInput = ref()
    const error = ref()
    if(!sharedEmail.value){
        router.push('/')
    }
    function logout(){
        sharedEmail.value = null
        router.push('/')
    }
    function deleteAccount(){
        wishToDelete.value = true
    }
    async function confirmDelete(){
        const {data} = useFetch('/api/deleteAccount',{
            method:'POST',
            body:{
                password:passInput.value
            }
        })
        if(data.value.errorMessage){
            error.value = data.value.errorMesssage
        } else {
            router.push('/')
        }
    }
</script>

<template>
  <button @click="logout">
    Logout
  </button>

  <button @click="deleteAccount">
    Delete account
  </button>
  <br>
  <div v-if="wishToDelete">
    <input v-model="passInput">
    <br>
    <button @click="confirmDelete">
      Confirm Account Deleteion
    </button>
    <button @click="()=>{wishToDelete = false}">
      Cancel Account Deleteion
    </button> 
    <br>
    <div
      v-if="error"
      class="error"
    >
      {{ error }}
    </div>
  </div>
</template>

<style scoped>
    input{
        border-style: solid;
        border-color: rgb(53, 97, 114);
        background-color: rgb(28, 47, 48);
        border-radius: 5px;
        text-align: center;
    }
    button{
        border-style: solid;
        height: 50px;
    }
    div, button{
        margin-top: 4dvh;
        margin-left: auto;
        margin-right: auto;
    }
</style>