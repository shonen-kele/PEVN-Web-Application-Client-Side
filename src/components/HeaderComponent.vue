<script setup>
  import { useLoginStore } from '@/stores/login';
  import { useRouter } from 'vue-router'
  import { toRaw, watch } from 'vue'
  const loginStore = useLoginStore()
  const email = ref()
  const router = useRouter()

  async function fetchTokenVerification(){
    console.log('before useFetch',loginStore.tokenState.token)
    await nextTick()
    const {data} = await useFetch('/api/verifyToken',{
      method:'POST',
      body:{
        token: loginStore.tokenState.token
      }
    })
    console.log('logging data',data)
    if(toRaw(data.value.ver)){
      email.value = toRaw(data.value).res.email
      loginStore.setLoginState(true)
    }
  }
  
  onBeforeMount(async ()=>{
    fetchTokenVerification()
  })

  watch(loginStore.tokenState, async ()=>{
    fetchTokenVerification()
  })
  
</script>

<template>
  <header>
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
      v-if="loginStore.loginState"
      id="userSettings"
      variant="tonal"
      @click="()=>{
        router.push('/settings')
      }"
    >
      {{ email }}
    </v-btn>

    <v-btn
      v-else 
      id="login"
      variant="tonal"
      @click="()=>{
        router.push('/authentication')
      }"
    >
      Login or Register
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
    padding-left: 130px;
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
