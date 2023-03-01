import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/Components/Views/HomeView.vue";
import ExploreView from "@/Components/Views/ExploreView.vue";
import PersonalView from "@/Components/Views/PersonalView.vue"
import LoginView from "@/Components/Views/LoginView.vue"
const router = createRouter({
  history:createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path:"/",
      name:"home",
      component:HomeView
    },
    {
      path:"/explore",
      name:"explore",
      component:ExploreView
    },
    {
      path:"/personal",
      name:"personal",
      component: PersonalView
    },
    {
      path:"/login",
      name:"login",
      component: LoginView,
    },
    {
      path:"/settings",
      name:"settings",
      component: () => import('@/Components/Views/SettingsView.vue')
    }
  ]
});
export {router} ;
