<script setup>
  import { RouterLink } from 'vue-router';
  import {sharedEmail} from '@/states/LoginState.js'
import { router } from '../router/index.js';

</script>

<template>
  <header>
    <input text="Search bar"/>
    <button id="searchButton">Search</button>

    <button 
      id="userSettings"
      v-if="sharedEmail"
      @click="()=>{router.push('/settings')}"
    >{{ sharedEmail }}</button>

    <button
      id="login" 
      v-else @click="()=>{router.push('/login')}"
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
