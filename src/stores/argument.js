import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useArgumentStore = defineStore('argument',()=>{
    const argumentTitle = ref()
    const argumentBody = ref()
    const email = ref()

    return {argumentTitle, argumentBody, email}
})