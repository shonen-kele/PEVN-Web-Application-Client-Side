<script setup>
    import AuthenticationService from "@/services/AuthenticationService.js"
    import {sharedEmail,token} from '@/states/LoginState.js'
    import {useRouter} from 'vue-router'
    import { ref } from "vue";
    
    
    
    const router = useRouter()    
    let email = ref()
    let password = ref()
    let error = ref()
    let message = ref()
    async function register(){
        const {data} = await useFetch('/api/register',{
            method:'POST',
            body:{
                email:email.value,
                password:password.value
            }
        })
        error.value = data.value.errorMessage
        message.value = data.value.message
        if(message.value){
            token.value = data.value.token
            sharedEmail.value = data.value.email
        }
    }
    
    async function login(){
        const {data} = await useFetch('/api/login',{
            method:'POST',
            body:{
                email:email.value,
                password:password.value
            }
        })
        console.log(data)
        error.value = data.value.errorMessage
        message.value = data.value.message
        if(message.value){
            sharedEmail.value = email.value
            token.value = data.value.token
            router.push('/personal')
        } else {
            sharedEmail.value = null
            sharedPass.value = null
        }
    }
    
</script>

<template>
    <form>
        <v-text-field 
            type="email"
            name="email"
            placeholder="email"
            v-model="email"
            variant="outlined"
        ></v-text-field>
        <br/>
        <v-text-field 
            type="password"
            name="password"
            placeholder="password"
            v-model="password"
            variant="outlined"
        ></v-text-field>
        <br/>
        <v-btn 
            id="login-button"
            @click="login"
            type="button"
            variant="tonal"
        >Login</v-btn>
        <v-btn 
            id="register-button"
            @click="register"
            type="button"
            variant = tonal
        >Register</v-btn>
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
        width: 400px;
        height:200px
    }
    .error{
        color:crimson;
    }
    #register-button{
        margin-left: 10px;
    }
</style>