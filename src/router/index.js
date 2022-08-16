import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import AddData from '../components/AddData.vue'
import Viewdata from '../components/Viewdata.vue'
import WeatherReport from '../components/WeatherReport.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: Dashboard
  },
  {
    path: '/add-data',
    name: 'add-data',
    component: AddData
  },
  {
    path: '/view-data',
    name: 'view-data',
    component: Viewdata
  },
  {
    path: '/weather-report',
    name: 'weather-report',
    component: WeatherReport
  }
]

const router = new VueRouter({
  routes
})

export default router