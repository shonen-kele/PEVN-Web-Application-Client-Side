<script setup>
import {nextTick, ref, toRaw, watch, inject} from 'vue'
import {useRouter} from 'vue-router'
import {useLoginStore} from '@/stores/login'

const loginStore = useLoginStore()
const router = useRouter()
const wishToDelete = ref(false)
const passInput = ref()
const error = ref()
const nuxtApp = useNuxtApp()

onBeforeMount(async ()=>{
  await nextTick()
  loginStore.fetchTokenVerification()
  if(!loginStore.loginState){
    router.push('/')
  }
})

watch(loginStore.loginState, ()=>{
  if(loginStore.loginState == null){
    router.push('/')
  }
})

function logout(){
  loginStore.tokenState = null
  loginStore.setLoginState(false)
  router.push('/')
}

async function confirmDelete(){
  const {data} = await nuxtApp.$api.post('/deleteAccount',{
    email: loginStore.emailState,
    password: passInput.value
  })
  console.log(data)
  if(data.errorMessage){
    error.value = data.errorMesssage
  } else {
    loginStore.tokenState.token = null
    loginStore.setLoginState(false)
    router.push('/')
  }
}
</script>

<template>
  <section id="settings root">
    <v-btn 
      @click="logout"
      variant="tonal"
    >
      Logout
    </v-btn>
    
    <v-btn 
      @click="()=>wishToDelete = true"
      variant="tonal"
    >
      Delete account
    </v-btn>
    <br>
    <div v-if="wishToDelete">
      <v-text-field 
        v-model="passInput"
        type="password"
      />
      <br>
      <div id="confirm-buttons">
        <v-btn 
          @click="confirmDelete"
          variant="tonal"
        >
          Confirm Account Deleteion
        </v-btn>
        <v-btn 
          @click="()=>{wishToDelete = false}"
          variant="tonal"
        >
          Cancel Account Deleteion
        </v-btn>
      </div>
       
      <br>
      <div
        v-if="error"
        class="error"
      >
        {{ error }}
      </div>
    </div>
  </section>
</template>

<style scoped>
input{
  border-style: solid;
  border-color: rgb(53, 97, 114);
  background-color: rgb(28, 47, 48);
  border-radius: 5px;
  text-align: center;
}

.v-btn{
  margin: 10px;
}

#confirm-buttons{
  display: flex;
  flex-direction: row;
}

#settings-root, button{
  margin-top: 4dvh;
  margin-left: auto;
  margin-right: auto;
}

#settings-root{
  margin-left: auto;
  margin-right: auto;
}

</style>