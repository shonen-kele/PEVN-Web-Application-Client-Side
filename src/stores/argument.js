import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useArgumentStore = defineStore('argument',()=>{
    const finalArgumentBody = ref()
    const argumentBody = ref()

    return {
        finalArgumentBody,
        argumentBody
    }
})