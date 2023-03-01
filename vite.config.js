import  {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue"
import path from "path"


export default defineConfig({
    plugins:[vue({
        template:{
            transformAssetUrls:{
                base: null,
                includeAbsolute: false
            }
        }
    })],
    resolve:{
        extensions:[
            "js",
            "ts",
            "vue"
        ],
        alias: {
            "@": path.resolve(__dirname,"./src")
        }
    }
})