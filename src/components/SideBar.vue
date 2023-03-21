<script setup>
  import { useLoginStore } from '@/stores/login'
  import { useSidebarWidthStore } from '@/stores/sidebarWidth'

  const sidebarStore = useSidebarWidthStore()
  const loginStore = useLoginStore()
</script>

<template>
  <div
    id="sidebar-container"
    :style="{width:sidebarStore.sidebarWidth}"
  >
    <div 
      v-if="!sidebarStore.collapsed" 
      id="sidebarButton"
      @click="sidebarStore.toggleSidebar"
    >
      &lt; &gt;
    </div>
    <nav v-if="!sidebarStore.collapsed">
      <NuxtLink to="/">
        Home
      </NuxtLink>
      <NuxtLink to="/explore">
        Explore
      </NuxtLink>

      <NuxtLink 
        v-if="loginStore.sharedEmail" 
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