<script setup>
  import SideBar from '@/Components/SideBar.vue'
  import HeaderComponent from '@/Components/HeaderComponent.vue'
  import {sidebarWidth} from '@/states/sidebarWidth.js'
  import {routerViewContainer} from '@/states/accessElements'
</script>

<template>
  <HeaderComponent/>
  <div id="not-header">
    <SideBar/>
    <div id="router-view-container" ref="routerViewContainer">
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
    margin-top: 4vh;
    height: 96vh;
    overflow-y: scroll;
    background-color: beige;
    margin-left: v-bind(sidebarWidth);
    transition: 0.3s ease;
    width: calc(100vw - v-bind(sidebarWidth));
  }

  body::-webkit-scrollbar{
    display: none;
  }
</style>