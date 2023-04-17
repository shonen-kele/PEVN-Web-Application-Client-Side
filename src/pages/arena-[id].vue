<script setup>
  import TextComparison from '@/components/TextComparison.vue'
  import {ref} from 'vue'
  import {useRoute} from 'vue-router'
  import {useArgumentStore} from '@/stores/argument'

  const rules = ref([v => v.length <= 5000 || 'Max 5000 characters'])
  const route = useRoute()
  let id = route.params.id
  const nuxtApp = useNuxtApp()
  const argumentStore = useArgumentStore()
  

  const {data} = await nuxtApp.$api.get('/argument',{
    params:{
      id:id
    }
  })
  const argumentTitle = ref(data.argumentTitle)
  argumentStore.argumentBody = data.argumentBody
  const argumentId = ref(id)
  const paramsError = ref(data.errorMessage)
  argumentStore.finalArgumentBody = data.argumentBody
</script>

<template>
  <section id="arena-root">
    <div v-if="!paramsError">
      <h3>{{ argumentTitle }}</h3>
      <div id="comparison">
        <TextEditor
          id="text-editor"
        />
        <TextComparison/>
      </div>
    </div>
    <h1 v-else>{{ paramsError }}</h1>
  </section>
  
</template>

<style scoped>
  h3{
    width: 500px;
  }
  h3, #comparison{
    margin-left: auto;
    margin-right: auto;
  }
  #comparison{
    display: flex;
    flex-direction: row;
    width: 1000px;
  }

  .v-textarea{
    width: 100%;
  }

  .v-card__text{
    overflow: auto;
  }

  #text-area-functionality{
    width: 100%;
  }
</style>