import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _aeff9de8 = () => interopDefault(import('../pages/form/index.vue' /* webpackChunkName: "pages/form/index" */))
const _c2c41932 = () => interopDefault(import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */))
const _29ec581d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/form",
    component: _aeff9de8,
    name: "form"
  }, {
    path: "/home",
    component: _c2c41932,
    name: "home"
  }, {
    path: "/",
    component: _29ec581d,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
