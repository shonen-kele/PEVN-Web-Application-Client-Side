import {register} from '@/controllers/AuthenticationController'
import {registerPolicy} from '@/policies/AuthenticationControllerPolicy'
import {defineEventHandler} from 'h3'

export default defineEventHandler(async (event)=>{
    const body = await readBody(event)
    const {error,errorMessage} = registerPolicy(body)
    if(!error){
        return register(body)
    } else {
        return errorMessage
    }
})