import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/kmba2/Coding/Projects in coding/Yessay/client/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}