import { defineEventHandler } from 'h3'
import { verifyToken } from '@/controllers/AuthenticationController'

export default defineEventHandler(async (event)=>{
    const {token} = await readBody(event)
    return verifyToken(token)
})