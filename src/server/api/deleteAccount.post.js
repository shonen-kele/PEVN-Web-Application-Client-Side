import {defineEventHandler} from 'h3'
import {deleteAccount} from '@/controllers/AuthenticationController'

export default defineEventHandler(async (event) =>{
    const body = await readBody(event)
    return deleteAccount(body)
})