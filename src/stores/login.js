import {defineStore, skipHydrate} from 'pinia'
import { ref, computed, nextTick } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import {api} from '@/services/Api'


export const useLoginStore = defineStore('login', ()=>{
    const tokenState = useLocalStorage('token-store',{
        token:'default'
    })

    const loginState = ref(false)

    const emailState = ref()

    async function fetchTokenVerification(){
        if(tokenState.value.token == 'default' || tokenState.value == null){
            console.log('Inside the default token state')
            return
        } else {
            const {data} = await api.post('/verification',{
                token: tokenState.value.token
            })
            
            console.log('logging data.ver',data.ver)
            if(data.ver){
                loginState.value = true
                emailState.value = data.result.email
            } else {
                loginState.value = false
            }
        }
    }

    function setToken(tokenArgs){
        tokenState.value.token = tokenArgs
    }

    const getToken = computed(()=>{
        return tokenState
    })

    function setLoginState(isUserLoggedIn){
        loginState.value = isUserLoggedIn
        emailState.value = null
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
