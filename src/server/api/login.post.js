import {login} from '@/controllers/AuthenticationController'
import {loginPolicy} from '@/policies/AuthenticationControllerPolicy'
import {defineEventHandler} from 'h3'

export default defineEventHandler(async (event)=>{
    const body = await readBody(event)
    const {error,errorMessage} = loginPolicy(body)
    if(!error){
        return login(body)
    } else{
        return errorMessage
    }
})