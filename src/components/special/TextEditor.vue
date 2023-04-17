<script setup>
    import {ref, watch} from 'vue'
    import {useArgumentStore} from '@/stores/argument'
    const rules = ref([v => v.length <= 5000 || 'Max 5000 characters'])
    const argumentStore = useArgumentStore()
</script>

<template>
    <div>
        <header>
            <v-btn> Add Link </v-btn>
            <v-btn> Upload File </v-btn>
        </header>
        <v-textarea
            rows="20"
            cols="50"
            counter
            placeholder="Rebute or Entail the argument, adding links and Uploading documents and files"
            v-model="argumentStore.finalArgumentBody"
            :rules="rules"
        ></v-textarea>
        <footer>
            <v-btn>Reset</v-btn>
            <v-btn>Rebute</v-btn>
            <v-btn>Entail</v-btn>
            <v-btn>Save</v-btn>
        </footer>
    </div>
</template>

<style scoped>
    header, footer{
        display: flex;
        flex-direction: row;
    }
</style>