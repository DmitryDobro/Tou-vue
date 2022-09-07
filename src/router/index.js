import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/components/pages/MainPage.vue"
import CompanyInfo from "@/components/pages/company/CompanyInfoPage.vue"
import CompanyComand from "@/components/pages/company/CompanySliderPage.vue"
import GamesMain from "@/components/pages/games/GamesPage.vue"
import GamesProject from "@/components/pages/games/GamesProjectPage.vue"
import Career from "@/components/pages/CareerPage.vue"
import News from "@/components/pages/NewsPage.vue"
import Contacts from "@/components/pages/ContactsPage.vue"


const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/company_info',
    name: 'companyInfo',
    component: CompanyInfo
  },
  {
    path: '/company_comand',
    name: 'companyComand',
    component: CompanyComand
  },
  {
    path: '/games_main',
    name: 'gamesMain',
    component: GamesMain
  },
  {
    path: '/games_project',
    name: 'games',
    component: GamesProject
  },
  {
    path: '/career',
    name: 'career',
    component: Career
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
