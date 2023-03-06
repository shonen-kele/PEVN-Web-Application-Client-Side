<script setup>
    import AuthenticationService from "/src/services/AuthenticationService.js"
    import {sharedEmail,sharedPass} from '@/states/LoginState.js'
    import { ref } from "vue";
    import { router } from "../../router/index.js";
    

    
    let email = ref()
    let password = ref()
    let error = ref()
    let message = ref()
    async function register(){
        const response = await AuthenticationService.register({
            email: email.value,
            password: password.value
        })
        error.value = response.data.error
        message.value = response.data.message
    }
    
    async function login(){
        const response = await AuthenticationService.login({
            email: email.value,
            password: password.value
        })
        error.value = response.data.error
        message.value = response.data.message
        if(message.value){
            sharedEmail.value = email.value
            sharedPass.value = password.value
            router.push('/personal')
        } else {
            sharedEmail.value = null
            sharedPass.value = null
        }
    }
    
</script>

<template>
    <form>
        <input 
            type="email"
            name="email"
            placeholder="email"
            v-model="email"
        />
        <br/>
        <input 
            type="password"
            name="password"
            placeholder="password"
            v-model="password"
        />
        <br/>
        <button 
            id="login-button"
            @click="login"
            type="button"
        >Login</button>
        <button 
            id="register-button"
            @click="register"
            type="button"
        >Register</button>
        <br/>
        <div v-if="error" class="error" v-html="error"></div>
        <div v-if="message" v-html="message"></div>
    </form>
</template>

<style>
    form{
        margin-top: 4vh;
        margin-left: auto;
        margin-right: auto;
    }
    .error{
        color:crimson;
    }
    #register-button{
        margin-left: 10px;
    }
</style>