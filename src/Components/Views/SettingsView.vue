<script setup>
    import {ref} from 'vue'
    import {sharedEmail} from '@/states/LoginState.js'
    import {router} from '../../router/index.js'
    import AuthenticationService from '@/services/AuthenticationService.js'

    let wishToDelete = ref(false)
    let passInput = ref()
    let error = ref()
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
        let response = await AuthenticationService.deleteAccount({
            email: sharedEmail.value,
            password: passInput
        })
        console.log(response)
        if(response.data.error){
            error.value = response.data.error
        } else {
            AuthenticationService.deleteLogin()
            router.push('/')
        }
    }
</script>

<template>
    <button @click="logout">Logout</button>

    <button @click="deleteAccount">Delete account</button>
    <br/>
    <div v-if="wishToDelete">
        <input v-model="passInput"/>
        <br/>
        <button @click="confirmDelete">Confirm Account Deleteion</button>
        <button @click="()=>{wishToDelete = false}">Cancel Account Deleteion</button> 
        <br/>
        <div v-if="error" class="error">{{ error }}</div>
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
        top: 4vh;
        left: 30px
    }
</style>