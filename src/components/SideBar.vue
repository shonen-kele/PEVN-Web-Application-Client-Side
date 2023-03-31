<script setup>
  import { useLoginStore } from '@/stores/login'
  import { useSidebarWidthStore } from '@/stores/sidebarWidth'

  const sidebarStore = useSidebarWidthStore()
  const loginStore = useLoginStore()
</script>

<template>
  <div  
    id="sidebar-button"
    @click="sidebarStore.toggleSidebar"
  >
    &lt; &gt;
  </div>
  <div
    id="sidebar-container"
    :style="{width:sidebarStore.sidebarWidth}"
  >
    <nav v-if="!sidebarStore.collapsed">
      <NuxtLink to="/">
        Home
      </NuxtLink>
      <NuxtLink to="/explore">
        Explore
      </NuxtLink>

      <NuxtLink 
        v-if="loginStore.loginState" 
        to="/personal"
      >
        Personal
      </NuxtLink>

      <NuxtLink
        v-else
        to="/authentication"
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
    height: 100%;
    margin-bottom: 0;
    bottom: 0;

    transition: 0.3s ease;
  }

  #sidebar-container nav{
    display:grid;
    justify-items: center;
    margin-top: 60px;
  }

  #sidebar-button{
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: 0px;
    left: 59px;
    width: 60px;
    height: 30px;
    z-index: 2;
  }
</style>