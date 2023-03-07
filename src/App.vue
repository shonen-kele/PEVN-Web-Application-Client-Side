<script setup>
  import HeaderComponent from  "./Components/HeaderComponent.vue";
  import SideBar from "./Components/SideBar.vue";
  import { RouterView} from "vue-router";
  import {sidebarWidth} from '@/states/sidebarWidth.js'
  import {ref} from 'vue'

  let routerViewWidth = ref(
    `calc(100vw - ${sidebarWidth})`
  )
</script>

<template>
  <HeaderComponent/>
  <div id="not-header">
    <SideBar/>
    <div id="router-view-container">
      <RouterView/>
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
    margin-left: v-bind(sidebarWidth);
    transition: 0.3s ease;
    width: calc(100vw - v-bind(sidebarWidth));
  }
</style>