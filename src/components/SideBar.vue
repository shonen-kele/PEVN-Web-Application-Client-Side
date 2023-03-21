<script setup>
  import {sharedEmail} from '@/states/LoginState.js'
  import { useSidebarWidthStore } from '@/stores/sidebarWidth'
  const store = useSidebarWidthStore()
</script>

<template>
  <div
    id="sidebar-container"
    :style="{width:store.sidebarWidth}"
  >
    <div 
      v-if="!store.collapsed" 
      id="sidebarButton"
      @click="store.toggleSidebar"
    >
      &lt; &gt;
    </div>
    <nav v-if="!store.collapsed">
      <NuxtLink to="/">
        Home
      </NuxtLink>
      <NuxtLink to="/explore">
        Explore
      </NuxtLink>

      <NuxtLink 
        v-if="sharedEmail" 
        to="/personal"
      >
        Personal
      </NuxtLink>

      <NuxtLink
        v-else
        to="/login"
      >
        Personal
      </NuxtLink>
    </nav>
  </div>
</template>

<style>
  #sidebar-container{
    background-color: salmon;

    /* Positioning */
    position: fixed;
    float: bottom;
    z-index: 1;
    height: max-content;

    /*Display*/
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    height: 100vh;
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
    text-align: center;
  }
</style>