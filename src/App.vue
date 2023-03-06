<script setup>
  import HeaderComponent from  "./Components/HeaderComponent.vue";
  import SideBar from "./Components/SideBar.vue";
  import {createRouterMatcher, RouterView, useRouter} from "vue-router";
  import {sidebarWidth} from '@/states/sidebarWidth.js'
</script>

<template>
  <HeaderComponent/>
  <div id="not-header">
    <SideBar/>
    <div :style="{'margin-left':sidebarWidth}">
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
</style>