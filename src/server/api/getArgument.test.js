import { expect, it, describe, vi } from "vitest";
import {getArgument} from '@/controllers/argumentController'

describe('get argument test', async ()=>{

    it('to not return undefined',()=>{
        expect(vi.fn(()=>getArgument(7))).not.toReturnWith(undefined)
    })

    it('to not return error',()=>{
        expect(vi.fn(()=>getArgument(7))).not.toReturnWith({errorMessage:`The argument with id 7 does not exist or there was an internal error`})
    })
})
