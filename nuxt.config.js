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
        },
        test:{
            alias:{
                '@': path.resolve(__dirname,'./src'),
                '@test': path.resolve(__dirname,'./tests')
            },
            root:'./',
            environment:'nuxt'
        }

    }},
    srcDir: 'src/',
    components:[{path:'@/components/special'}],
    modules:[
        '@pinia/nuxt',
        '@nuxt/devtools',
        '@vueuse/nuxt'
    ]
})