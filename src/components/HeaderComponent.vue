<script setup>
  import {sharedEmail} from '@/states/LoginState.js'
  import { useRouter } from 'vue-router'
  const router = useRouter()
</script>

<template>
  <header>
    <v-text-field 
    placeholder="Search"
    density="compact"
    variant="outlined"
    clearable></v-text-field>
    <v-btn variant="tonal" id="searchButton">Search</v-btn>

    <v-btn 
      id="userSettings"
      v-if="sharedEmail"
      @click="()=>{
        router.push('/settings')
      }"
      variant="tonal"
    >{{ sharedEmail }}</v-btn>

    <v-btn
      id="login" 
      v-else @click="()=>{router.push({path:'/login'})}"
      variant="tonal"
    >Login</v-btn>

  </header>
</template>

<style scoped>
  header{
    display: flex;
    justify-content: flex-end;
    position: fixed;
    height: 4vh;
    width: 100vw;
    border-bottom: solid;
    border-width: 3px;
    border-color:salmon;
    margin-top: 0;
    background-image: linear-gradient(to bottom, rgb(211, 89, 89), beige);
  }
  input{
    background-color: rgb(97, 109, 109);
  }

  .v-text-field{
    height: 0.5vh;
    max-width: 200px;
  }

  #searchButton{
    margin-right: 10px;
  }
</style>
