import { defineNuxtConfig } from "nuxt/config";
import path from 'path'

export default defineNuxtConfig({
    buildDir:'.nuxt',
    alias: {
        '@': path.resolve(__dirname,'src')
    },
    css:['vuetify/lib/styles/main.css'],
    build:{
        transpile:['vuetify']
    },
    vite:{
        root:'@',
        assetsInclude:['**/*.Vue'],
        server:{
        fs:{
            allow:[
                '@/components',
            ]
        }
    }},
    srcDir: 'src/',
    components:[{path:'@/components/special'}],
})