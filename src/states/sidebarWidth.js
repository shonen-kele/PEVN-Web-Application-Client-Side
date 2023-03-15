import {ref, computed} from 'vue'

let collapsed = ref(false);
let toggleSidebar = () => (collapsed.value = !collapsed.value)
//Computing the sidebar width
let sidebarWidth = computed(
    () => `${collapsed.value ? 30 : 180}px`
)

export{collapsed, toggleSidebar, sidebarWidth}