import { api } from "@/services/Api"
export default defineNuxtPlugin(() => {
    return{
        provide:{
            api: api
        }
    }
})