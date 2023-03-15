import {defineEventHandler} from 'h3'
import {createArgument} from "@/controllers/ArgumentController"
import {createArgumentPolicy} from '@/policies/ArgumentControllerPolicy'

export default defineEventHandler(async (event)=>{
    const body = await readBody(event)
    const {error,errorMessage} = createArgumentPolicy(body)
    if(!error){
        return createArgument(body)
    } else {
        return errorMessage
    }
})  