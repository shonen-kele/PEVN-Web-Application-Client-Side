<script setup>
import {useRouter} from 'vue-router'
import { ref } from "vue";
import { useLoginStore } from '@/stores/login'

const store = useLoginStore()
const router = useRouter()    
const email = ref()
const password = ref()
const error = ref()
const message = ref()
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
		store.setToken(data.value.token)
		store.setEmail(data.value.email)
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
	error.value = data.value.errorMessage
	message.value = data.value.message
	if(message.value){
		store.setToken(data.value.token)
		store.setEmail(data.value.email)
    store.setLoginState(true)
		router.push('/personal')
	} else {
		store.setEmail(null)
	}
}

</script>

<template>
  <form>
    <v-text-field 
      v-model="email"
      type="email"
      name="email"
      placeholder="email"
      variant="outlined"
    />
    <br>
    <v-text-field 
      v-model="password"
      type="password"
      name="password"
      placeholder="password"
      variant="outlined"
    />
    <br>
    <v-btn 
      id="login-button"
      type="button"
      variant="tonal"
      @click="login"
    >
      Login
    </v-btn>
    <v-btn 
      id="register-button"
      type="button"
      variant="tonal"
      @click="register"
    >
      Register
    </v-btn>
    <br>
    <div
      v-if="error"
      class="error"
      v-text="error"
    />
    <div
      v-if="message"
      v-text="error"
    />
  </form>
</template>

<style>
form{
	margin-top: 4dvh;
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