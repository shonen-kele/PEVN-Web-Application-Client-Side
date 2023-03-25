import {defineEventHandler} from 'h3'
import {getArgument} from '@/controllers/argumentController'

export default defineEventHandler(async (event)=>{
    const {id} = await readBody(event)
    return getArgument(id)
})