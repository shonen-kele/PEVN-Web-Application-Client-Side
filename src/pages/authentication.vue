<script setup>
import {useRouter} from 'vue-router'
import { ref, onBeforeMount } from "vue";
import { useLoginStore } from '@/stores/login'

const router = useRouter()
const loginStore = useLoginStore()
const isLoginForm = ref(false)
const {setEmail,setToken,setLoginState} = loginStore
const error = ref()
const message = ref()
const nuxtApp = useNuxtApp()
async function login(email,password){
	const {data} = await nuxtApp.$api.get('/user',{
		params:{
			email:email,
			password:password
		}
	})
	error.value = data.errorMessage
	message.value = data.message
	if(message.value){
		setToken(data.token)
		setLoginState(true)
		router.push('/personal')
	}
}
async function register(email,password){
	const {data} = await nuxtApp.$api.post('/user',{
		email:email,
		password:password
	})
	error.value = data.errorMessage
	message.value = data.message
	console.log(message.value)
}

loginStore.fetchTokenVerification()
if(loginStore.loginState){
	router.push('/personal')
}

</script>

<template>
  <section id="login-register">
		<div
			id="login-form"
			v-if="isLoginForm"
		>
			<AuthenticationForm
				buttonText="login"
				@functionEmit="(emailEmitArg, passEmitArg)=>{
					login(emailEmitArg,passEmitArg)
				}"
			/>
			<v-divider vertical/>
			<v-btn
				@click="()=>isLoginForm=false"
			>Register</v-btn>
		</div>
    
		<div
			id="register-form"
			v-else
		>
			<v-btn
				@click="()=>isLoginForm=true"
			>Login</v-btn>
			<v-divider vertical/>
			<AuthenticationForm
				buttonText="register"
				@functionEmit="(emailEmitArg,passEmitArg)=>{
					register(emailEmitArg,passEmitArg)
				}"
			/>
		</div>
		
    <br>
    <div
      v-if="error"
      class="error"
    >
		{{ error }}
	</div>
    <div
      v-if="message"
    >
		{{ message }}
	</div>
  </section>
</template>

<style scoped>
#login-register{
	margin-top: 4dvh;
	margin-left: auto;
	margin-right: auto;
	width: 500px;
	height:200px
}
.error{
	color:crimson;
}
#register-button{
	margin-left: 10px;
}

#login-form, #register-form{
	display: flex;
	flex-direction: row;
	width: 500px;
	justify-content: center;
	align-items: center;
}

form{
	width: 100%;
	margin: 10px;
}

.v-btn{
	margin: 10px
}
</style>