<script setup>
  import { RouterLink } from 'vue-router';
  import {ref,computed} from "vue"
  import {sharedEmail} from '@/states/LoginState.js'

  let collapsed = ref(false);
  let toggleSidebar = () => (collapsed.value = !collapsed.value)
  //Computing the sidebar width
  let sidebarWidth = computed(
    () => `${collapsed.value ? 30 : 180}px`
  )
</script>

<template>
  <div id="sidebar-container" v-bind:style="{width:sidebarWidth}">
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