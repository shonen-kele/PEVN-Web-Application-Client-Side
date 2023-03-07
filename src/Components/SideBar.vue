<script setup>
  import { RouterLink } from 'vue-router';
  import {sharedEmail} from '@/states/LoginState.js'
  import {toggleSidebar, collapsed, sidebarWidth} from '@/states/sidebarWidth.js'
</script>

<template>
  <div id="sidebar-container" :style="{width:sidebarWidth}">
    <nav v-if="!collapsed">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/explore">Explore</RouterLink>

      <RouterLink 
        v-if="sharedEmail" 
        to="/personal"
      >Personal</RouterLink>

      <RouterLink
        v-else
        to="/login"
      >Personal</RouterLink>
    </nav>
    <div v-on:click="toggleSidebar">&lt; &gt;</div>
  </div>
</template>

<style>
  #sidebar-container{
    background-color: darkslategrey;
    border-color: rgb(53, 97, 114);
    border-style: solid;
    border-width: 3px;

    /* Positioning */
    position: fixed;
    float: bottom;
    z-index: 1;
    height: max-content;

    /*Display*/
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    height: 96vh;
    margin-bottom: 0;
    bottom: 0;

    transition: 0.3s ease;
  }

  #sidebar-container nav{
    display:grid;
    justify-items: center;
  }

  #sidebar-container div{
    width: inherit;
    height: 60px;
    margin-top:auto;
    margin-bottom: 0;
    text-align: center;
  }

  a{
    color:beige;
  }
</style>