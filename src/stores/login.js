import {defineStore} from 'pinia'
import { ref } from 'vue'

export const useLoginStore = defineStore('login',()=>{
    const token = ref()
    const sharedEmail = ref()
    const isUserLoggedIn = ref(false)
    function setToken(token){
        token.value = token
    }
    function setEmail(email){
        sharedEmail.value = email
    }

    function setLoginState(boolean){
        isUserLoggedIn.value = boolean
    }
    return {token,sharedEmail,setToken,setEmail,setLoginState}
})