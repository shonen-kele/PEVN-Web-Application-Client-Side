import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/Users/kmba2/Coding/Projects in coding/Yessay/client/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}