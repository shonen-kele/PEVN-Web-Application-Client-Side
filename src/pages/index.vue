<script setup>
  import {useLoginStore} from '@/stores/login'
  import { ref } from 'vue'
  const loginStore = useLoginStore()
  const nuxtApp = useNuxtApp()
  const watchedArguments = ref([])
  if(loginStore.emailState){
    const watch = await nuxtApp.$api.get(`users/${loginStore.emailState}/watch`)
    console.log('logging watch',watch)
    const {data} = await nuxtApp.$api.get('/arguments',{
      params:{
        id:watch.data.watchedId
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
    <div
      v-if="loginStore.emailState"
    >
      <p>These are your saved arguments</p>
      <v-card 
        v-for="watchedArgument in watchedArguments"
        :title="watchedArgument.title"
        :text="watchedArgument.argument"
      ></v-card>
    </div>
    
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