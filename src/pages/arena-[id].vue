<script setup>
  import {ref} from 'vue'
  import {useRoute} from 'vue-router'
  import { useArgumentStore } from '@/stores/argument'
  const store = useArgumentStore()
  const rules = ref([v => v.length <= 5000 || 'Max 5000 characters'])
  const route = useRoute()
  let id = route.params.id
  const {data} = await useFetch('/api/getArgument',{
    method:'POST',
    body:{
      id:id
    }
  })

</script>

<template>
  <div>
    <h3>{{ store.argumentTitle }}</h3>
    <div id="comparison">
      <div id="text-area-functionality">
        <v-textarea 
        rows=20
        cols="50"
        counter
        placeholder="Rebut the argument"
        :model-value="store.argumentBody"
        :rules="rules"
        ></v-textarea>
        <div class="text-area-actions">
          <v-btn>Reset</v-btn>
        </div>
      </div>
      
      <v-card 
      variant="tonal"
      :text="store.argumentBody"
      ></v-card>
    </div>
  </div>
  
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