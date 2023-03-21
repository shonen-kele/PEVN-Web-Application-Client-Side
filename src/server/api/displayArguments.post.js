import { defineEventHandler } from 'h3'
import { displayArguments } from '@/controllers/ArgumentController'

export default defineEventHandler(async (event)=>{
    const body = await readBody(event)
    console.log('body.offset is' + body.offset)
    return displayArguments(body.offset)
})