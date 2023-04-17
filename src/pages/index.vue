<script setup>
  import {useLoginStore} from '@/stores/login'
  import { ref } from 'vue'
  const loginStore = useLoginStore()
  const nuxtApp = useNuxtApp()
  const watchedArguments = ref([])
  if(loginStore.emailState){
    const watch = await nuxtApp.$api.get('/user/watch',{
      params:{
        email:loginStore.emailState
      }
    }).watchedId
    const {data} = await nuxtApp.$api.get('/argument',{
      params:{
        id:watch.watchedId
      }
    })

    if(data.arguments){
      data.arguments.forEach(argument=>{
        watchedArguments.value.push(argument)
      })
    }
  }
  

</script>
<template>
  <section>
    <v-card 
    v-for="watchedArgument in watchedArguments"
    :title="watchedArgument.title"
    :text="watchedArgument.argument"
    v-if="loginStore.emailState"
    ></v-card>
    <p v-else>This is the home page</p>
  </section>
</template>

<style>
  p1{
    margin-top: 4dvh;
    margin-left: auto;
    margin-right: auto;
  }
</style>