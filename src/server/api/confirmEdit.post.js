import {defineEventHandler} from 'h3'
import { editArgument } from '@/controllers/ArgumentController'

export default defineEventHandler(async (event)=>{
    const body = await readBody(event)
    return editArgument(body)
})