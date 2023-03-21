import {defineStore} from 'pinia'
import { ref } from 'vue'

export const useRouterViewContainerStore = defineStore('routerViewContainer',()=>{
    const routerViewContainer = ref(null)
    return routerViewContainer
})