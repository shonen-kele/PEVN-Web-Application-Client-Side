<script setup>
  import {ref} from 'vue'
  import {useRoute} from 'vue-router'
  const rules = ref([v => v.length <= 5000 || 'Max 5000 characters'])
  const route = useRoute()
  let id = route.params.id
  const {data} = await useFetch('/api/getArgument',{
    method:'POST',
    body:{
      id:id
    }
  })
  const argumentTitle = ref(data.value.argumentTitle)
  const argumentBody = ref(data.value.argumentBody)
  const argumentId = ref(id)
  const paramsError = ref(data.value.errorMessage)

</script>

<template>
  <section id="arena-root">
    <div v-if="!paramsError">
      <h3>{{ argumentTitle }}</h3>
      <div id="comparison">
        <div id="text-area-functionality">
          <v-textarea 
          rows=20
          cols="50"
          counter
          placeholder="Rebut the argument"
          :model-value="argumentBody"
          :rules="rules"
          ></v-textarea>
          <div class="text-area-actions">
            <v-btn>Reset</v-btn>
          </div>
        </div>
        
        <v-card 
        variant="tonal"
        :text="argumentBody"
        ></v-card>
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