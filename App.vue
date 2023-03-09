<script setup>
  import SideBar from '@/Components/SideBar.vue'
  import HeaderComponent from '@/Components/HeaderComponent.vue'
  import {sidebarWidth} from '@/states/sidebarWidth.js'
</script>

<template>
  <HeaderComponent/>
  <div id="not-header">
    <SideBar/>
    <div id="router-view-container">
      <NuxtPage/>
    </div>
  </div>
</template>

<style>
  #not-header{
    display: flex;
    flex-direction: row;
    height: 96vh;
  }
  #router-view-container{
    background-color: darkslategrey;
    margin-left: v-bind(sidebarWidth);
    transition: 0.3s ease;
    width: calc(100vw - v-bind(sidebarWidth));
  }
</style>