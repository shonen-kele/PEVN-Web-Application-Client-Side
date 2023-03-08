import {createRouter, createWebHistory} from "vue-router";
const router = createRouter({
  history:createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path:"/",
      name:"home",
      component: () => import('@/Components/Views/HomeView.vue')
    },
    {
      path:"/explore",
      name:"explore",
      component: () => import('@/Components/Views/ExploreView.vue')
    },
    {
      path:"/personal",
      name:"personal",
      component: () => import('@/Components/Views/PersonalView.vue')
    },
    {
      path:"/login",
      name:"login",
      component: () => import('@/Components/Views/LoginView.vue')
    },
    {
      path:"/settings",
      name:"settings",
      component: () => import('@/Components/Views/SettingsView.vue')
    }
  ]
});
export {router} ;
