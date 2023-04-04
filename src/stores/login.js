import {defineStore, skipHydrate} from 'pinia'
import { ref, computed, nextTick } from 'vue'
import { useLocalStorage } from '@vueuse/core'


export const useLoginStore = defineStore('login', ()=>{
    const tokenState = useLocalStorage('token-store',{
        token:'default'
    })

    const loginState = ref(false)

    const emailState = ref()

    async function fetchTokenVerification(){
        console.log('before useFetch',tokenState.value.token)
        await nextTick()
        const {data} = await useFetch('/api/verifyToken',{
            method:'POST',
            body:{
            token: tokenState.value.token
            }
        })
        console.log('logging data',data)
        console.log('logging data.value',data.value)
        if(toRaw(data.value.ver)){
            loginState.value = true
            emailState.value = data.value.res.email
            console.log('logging emailState.value',emailState.value)
        } else {
            loginState.value = false
        }
    }

    function setToken(tokenArgs){
        tokenState.value.token = tokenArgs
        console.log('after setting tokenArgs', tokenState)
    }

    const getToken = computed(()=>{
        return tokenState
    })

    function setLoginState(isUserLoggedIn){
        loginState.value = isUserLoggedIn
    }
    return {
        tokenState: skipHydrate(tokenState),
        setToken,
        getToken,
        setLoginState,
        loginState,
        fetchTokenVerification,
        emailState
    }
})
