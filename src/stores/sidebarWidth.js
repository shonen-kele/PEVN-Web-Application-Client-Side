import { defineStore } from 'pinia'
import { ref, computed} from 'vue'

export const useSidebarWidthStore = defineStore('sidebarWidth',()=>{
    let collapsed = ref(false)
    let toggleSidebar = () => {collapsed.value = !collapsed.value}
    let sidebarWidth = computed(
        () => `${collapsed.value ? 0 : 180}px`
    )
    return { collapsed, toggleSidebar, sidebarWidth}
})