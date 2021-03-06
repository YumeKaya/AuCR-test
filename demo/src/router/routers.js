import Vue from 'vue'
import Router from 'vue-router'
import Start from '../components/view/start'
import Main from '../components/view/main'

Vue.use(Router);

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/

export const constantRouterMap = [
  {
    path: '/start',
    meta: {
      title: '主页',
      noCache: true
    },
    component: Start,
    hidden: true
  },
  {
    path: '/main',
    meta: {
      title: '主页',
      noCache: true
    },
    component: Main,
    hidden: true
  },
  // { path: '*', redirect: '/404', hidden: true }
];

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})
