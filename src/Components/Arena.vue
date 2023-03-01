<script setup>
 const props = defineProps({
  title: String
 })
</script>

<template>
  {{ title||'No props passed yet' }}
</template>