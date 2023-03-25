import {defineEventHandler} from 'h3'
import {getArgument} from '@/controllers/argumentController'

export default defineEventHandler((event)=>{
    const {id} = readBody(event)
    return getArgument(id)
})