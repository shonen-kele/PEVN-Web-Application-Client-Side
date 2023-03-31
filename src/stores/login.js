import {defineStore, skipHydrate} from 'pinia'
import { ref, computed } from 'vue'
import { useLocalStorage } from '@vueuse/core'


export const useLoginStore = defineStore('login', ()=>{
    const tokenState = useLocalStorage('token-store',{
        token:'default'
    })

    const loginState = ref(false)

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
        loginState
    }
})
