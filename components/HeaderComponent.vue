<script setup>
  import {sharedEmail} from '@/states/LoginState.js'
  import { useRouter } from 'vue-router'
  const router = useRouter()
</script>

<template>
  <header>
    <input text="Search bar"/>
    <button id="searchButton">Search</button>

    <button 
      id="userSettings"
      v-if="sharedEmail"
      @click="()=>{
        router.push({path: '/settings'})
      }"
    >{{ sharedEmail }}</button>

    <button
      id="login" 
      v-else @click="()=>{router.push({path:'/login'})}"
    >Login</button>

  </header>
</template>

<style scoped>
  header{
    display: flex;
    justify-content: flex-end;
    position: fixed;
    height: 4vh;
    width: 100vw;
    border-style: solid;
    border-width: 3px;
    border-color:rgb(53, 97, 114);
    margin-top: 0;
    background-image: linear-gradient(to bottom, rgb(97, 109, 109), darkslategrey);
  }
  input{
    background-color: rgb(97, 109, 109);
  }

  #searchButton{
    margin-right: 10px;
  }
</style>
