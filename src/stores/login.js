import {defineStore} from 'pinia'
import { ref } from 'vue'

export const useLoginStore = defineStore('login',()=>{
    const token = ref()
    const sharedEmail = ref()
    return {token,sharedEmail}
})