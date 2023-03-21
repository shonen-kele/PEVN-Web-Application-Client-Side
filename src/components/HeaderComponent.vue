<script setup>
  import { useLoginStore } from '@/stores/login';
  import { useRouter } from 'vue-router'
  import { useSidebarWidthStore } from '@/stores/sidebarWidth';
  const router = useRouter()
  const sidebarStore = useSidebarWidthStore()
  const loginStore = useLoginStore()
</script>

<template>
  <header>
    <div
      id="sidebarButton"
      @click="sidebarStore.toggleSidebar"
    >
      &lt; &gt;
    </div>

    <div id="search">
      <v-text-field 
        id="searchBar"
        placeholder="Search"
        density="compact"
        variant="outlined"
        clearable
      />
      <v-btn
        id="searchButton"
        variant="tonal"
      >
        Search
      </v-btn>
    </div>

    <v-btn 
      v-if="loginStore.sharedEmail"
      id="userSettings"
      variant="tonal"
      @click="()=>{
        router.push('/settings')
      }"
    >
      {{ loginStore.sharedEmail }}
    </v-btn>

    <v-btn
      v-else 
      id="login"
      variant="tonal"
      @click="()=>{router.push({path:'/login'})}"
    >
      Login
    </v-btn>
  </header>
</template>

<style scoped>
  header{
    display: flex;
    justify-content: space-between;
    position: fixed;
    height: 4vh;
    width: 100vw;
    margin-top: 0;
    background-image: linear-gradient(to bottom, rgb(211, 89, 89), beige);
    padding-left: 50px;
    padding-right: 50px;
  }
  input{
    background-color: rgb(97, 109, 109);
  }

  .v-text-field{
    max-width: 200px;
  }

  #searchButton{
    margin-right: 10px;
  }

  #search{
    width: 500px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    
  }
</style>
