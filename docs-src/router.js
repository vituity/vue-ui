import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './components/pages/Dashboard'
import ButtonsPage from './components/pages/ButtonsPage'
import MainLayoutView from './components/app/MainLayoutView'
import TableBasicPage from './components/pages/TableBasicPage'
import TabsPage from './components/pages/TabsPage'
import FormElementsPage from './components/pages/FormElementsPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainLayoutView,
      children: [
        {
          path: '/dashboard/v1',
          component: Dashboard
        },
        {
          path: '/ui/buttons',
          component: ButtonsPage
        },
        {
          path: '/table/basic',
          component: TableBasicPage
        },
        {
          path: '/form/elements',
          component: FormElementsPage
        },
        {
          path: '/ui/tabs',
          component: TabsPage
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
