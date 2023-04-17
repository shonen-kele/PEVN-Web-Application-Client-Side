import { defineNuxtConfig } from "nuxt/config"
import path from 'path'
import vuetify from "vite-plugin-vuetify"

export default defineNuxtConfig({
    alias: {
        '@': path.resolve(__dirname,'src')
    },
    css:[
        'vuetify/styles',
        'vuetify/lib/styles/main.css'
    ],
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
        '@vueuse/nuxt',
        async (options, nuxt) =>{
            nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(vuetify()))
        }
    ]
})