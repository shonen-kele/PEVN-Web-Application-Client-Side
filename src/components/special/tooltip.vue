<script setup>
    import {computed, reactive} from 'vue'
    import { useMouse } from '@vueuse/core' //Need to add a tooltip
    const props = defineProps({
        text: String,
        isHovered: Boolean
    })
    const {x,y} = useMouse()
    const top = computed(()=>`${y.value}px`)
    const left = computed(()=>`${x.value+5}px`)
</script>

<template>
    <p>{{ text }}</p>
</template>

<style scoped>
    p{
        background-color: darkblue;
        color: antiquewhite;
        position: absolute;
        top: v-bind('top');
        left: v-bind('left');
        border-radius: 5px;
    }
</style>