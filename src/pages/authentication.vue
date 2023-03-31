<script setup>
import {useRouter} from 'vue-router'
import { ref } from "vue";
import { useLoginStore } from '@/stores/login'

const router = useRouter()
const loginStore = useLoginStore()
const isLoginForm = ref(false)
const {setEmail,setToken,setLoginState} = loginStore
const error = ref()
const message = ref()
console.log('on setup',loginStore.tokenState)
async function login(email,password){
	const {data} = await useFetch('/api/login',{
		method:'POST',
		body:{
			email:email,
			password:password
		}
	})
	error.value = data.value.errorMessage
	message.value = data.value.message
	if(message.value){
		await setToken(data.value.token)
		console.log('Local storage after setToken',loginStore.tokenState)
		setLoginState(true)
		await router.push('/personal')
	} else {
		setEmail(null)
	}
}
async function register(email,password){
	const {data} = await useFetch('/api/register',{
		method:'POST',
		body:{
			email:email,
			password:password
		}
	})
	error.value = data.value.errorMessage
	message.value = data.value.Emit
	if(message.value){
		setToken(data.value.token)
		setEmail(data.value.email)
	}
}

</script>

<template>
  <div id="login-register">
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
      :text="error"
    ></div>
    <div
      v-if="message"
      :text="error"
    ></div>
  </div>
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