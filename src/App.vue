<script setup>
  import SideBar from '@/Components/SideBar.vue'
  import HeaderComponent from '@/Components/HeaderComponent.vue'
  import { useSidebarWidthStore } from '@/stores/sidebarWidth'
  const store = useSidebarWidthStore()
  const sidebarWidth = computed(()=>store.sidebarWidth)

</script>

<template>
  <HeaderComponent />
  <div id="not-header">
    <SideBar />
    <div id="router-view-container">
      <NuxtPage />
    </div>
  </div>
</template>

<style>
  #not-header{
    display: flex;
    flex-direction: row;
    height: 96dvh;
  }
  #router-view-container{
    margin-top: 4dvh;
    height: 96dvh;
    background-color: beige;
    overflow: -moz-hidden-unscrollable;
    margin-left: v-bind(sidebarWidth);
    transition: 0.3s ease;
    width: calc(100vw - v-bind(sidebarWidth));
  }
  body{
    background-color: beige;
    scrollbar-width: thin;
  }
</style>