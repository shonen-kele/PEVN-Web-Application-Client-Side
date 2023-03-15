import {destroyArgument} from '@/controllers/ArgumentController'
import {defineEventHandler} from 'h3'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    return destroyArgument(body)
})