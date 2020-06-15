import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [

  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  },

  {
    path: '/category',
    component: Layout,
    redirect: '/category/food',
    name: '分类管理',
    meta: { title: '分类管理', icon: 'tab' },
    children: [
      {
        path: 'food',
        name: '食物分类列表',
        component: () => import('@/views/category/foodIndex'),
        meta: { title: '食物分类列表', icon: 'tab' }
      },
      {
        path: 'drink',
        name: '饮料分类列表',
        component: () => import('@/views/category/drinkIndex'),
        meta: { title: '饮料分类列表', icon: 'tab' }
      }
    ]
  },

  {
    path: '/drink',
    component: Layout,
    redirect: '/drink/index',
    name: '饮料管理',
    meta: { title: '饮料管理', icon: 'drink2' },
    children: [
      {
        path: 'index',
        name: '饮料列表',
        component: () => import('@/views/drink/index'),
        meta: { title: '饮料列表', icon: 'drink2' }
      }
    ]
  },

  {
    path: '/food',
    component: Layout,
    redirect: '/food/index',
    name: '食物管理',
    meta: { title: '食物管理', icon: 'food2' },
    children: [
      {
        path: 'index',
        name: '食物列表',
        component: () => import('@/views/food/index'),
        meta: { title: '食物列表', icon: 'food2' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '表单', icon: 'form' }
      }
    ]
  },

  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/export-excel',
    name: 'Excel',
    meta: {
      title: 'Excel',
      icon: 'excel'
    },
    children: [
      {
        path: 'export-excel',
        component: () => import('@/views/excel/export-excel'),
        name: 'ExportExcel',
        meta: { title: '一般使用' }
      },
      {
        path: 'export-selected-excel',
        component: () => import('@/views/excel/select-excel'),
        name: 'SelectExcel',
        meta: { title: '多选下载' }
      },
      {
        path: 'export-merge-header',
        component: () => import('@/views/excel/merge-header'),
        name: 'MergeHeader',
        meta: { title: '复杂表头' }
      },
      {
        path: 'upload-excel',
        component: () => import('@/views/excel/upload-excel'),
        name: 'UploadExcel',
        meta: { title: '上传Excel' }
      }
    ]
  },

  {
    path: '/map',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Map',
        component: () => import('@/views/map/index'),
        meta: { title: '地图', icon: 'international' }
      }
    ]
  },

  {
    path: '/news',
    component: Layout,
    redirect: '/news/create',
    name: 'Example',
    meta: {
      title: '新闻管理',
      icon: 'edit'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/news/AddNews.vue'),
        name: 'AddNews',
        meta: { title: '新增新闻', icon: 'edit' }
      },
      {
        path: 'list',
        component: () => import('@/views/news/NewsList.vue'),
        name: 'NewsList',
        meta: { title: '新闻列表', icon: 'edit' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    meta: { title: '博客', icon: 'food2' },
    children: [
      {
        path: 'https://huangguoy.github.io/',
        meta: { title: '外链', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
