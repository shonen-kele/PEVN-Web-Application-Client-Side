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
    height: 96%;
  }
  #router-view-container{
    margin-top: 4dvh;
    height: 96%;
    background-color: beige;
    overflow: -moz-hidden-unscrollable;
    margin-left: v-bind(sidebarWidth);
    transition: 0.3s ease;
    width: calc(100% - v-bind(sidebarWidth));
  }
  body{
    background-color: beige;
    scrollbar-width: thin;
  }

  .v-card{
    color: rgb(85, 42, 37);
  }
</style>