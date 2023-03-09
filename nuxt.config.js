import vuetify from "vite-plugin-vuetify";
import vue from '@vitejs/plugin-vue'
import { defineNuxtConfig } from "nuxt/config";
import path from 'path'

export default defineNuxtConfig({
    buildDir: 'nuxt-dist',
    alias: {
        '@': path.resolve(__dirname)
    },
    css:['vuetify/lib/styles/main.css'],
    build:{
        transpile:['vuetify']
    },
    vite:{assetsInclude:['**/*.Vue']}
})