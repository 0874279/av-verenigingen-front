import Vue from 'vue'
import VueRouter from 'vue-router'
// import AllClubs from './theme/AllClubs.vue'
// import NotFound from './theme/NotFound.vue'
const AllClubs = () => import('./theme/AllClubs.vue')
const Create = () => import('./theme/Create.vue')
const NotFound = () => import('./theme/NotFound.vue')
const View = () => import('./theme/View.vue')
const Edit = () => import('./theme/Edit.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
  routes: [
    {path: '/av-verenigingen/front-end/district/:district', name: 'allclubs', component: AllClubs},
    {path: '/av-verenigingen/front-end/create', name: 'create', component: Create},
    {path: '/av-verenigingen/front-end/view/:_id', name: 'view', component: View},
    {path: '/av-verenigingen/front-end/edit/:_id', name: 'edit', component: Edit},
    {path: '/', redirect: '/av-verenigingen/front-end/district/all'},
    {path: '*', component: NotFound}
  ]
})

export default router
