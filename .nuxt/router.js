import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _128a7877 = () => import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */).then(m => m.default || m)
const _45fbd4f3 = () => import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */).then(m => m.default || m)
const _38f63fb1 = () => import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */).then(m => m.default || m)
const _18944dda = () => import('../pages/admin/auth/index.vue' /* webpackChunkName: "pages/admin/auth/index" */).then(m => m.default || m)
const _2b29df1f = () => import('../pages/admin/new-post/index.vue' /* webpackChunkName: "pages/admin/new-post/index" */).then(m => m.default || m)
const _6f75b2fe = () => import('../pages/admin/_postid/index.vue' /* webpackChunkName: "pages/admin/_postid/index" */).then(m => m.default || m)
const _5417003c = () => import('../pages/posts/_id/index.vue' /* webpackChunkName: "pages/posts/_id/index" */).then(m => m.default || m)
const _1f90e31a = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash && document.querySelector(to.hash)) {
        // scroll to anchor by returning the selector
        position = { selector: to.hash }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/posts",
			component: _128a7877,
			name: "posts"
		},
		{
			path: "/admin",
			component: _45fbd4f3,
			name: "admin"
		},
		{
			path: "/about",
			component: _38f63fb1,
			name: "about"
		},
		{
			path: "/admin/auth",
			component: _18944dda,
			name: "admin-auth"
		},
		{
			path: "/admin/new-post",
			component: _2b29df1f,
			name: "admin-new-post"
		},
		{
			path: "/admin/:postid",
			component: _6f75b2fe,
			name: "admin-postid"
		},
		{
			path: "/posts/:id",
			component: _5417003c,
			name: "posts-id"
		},
		{
			path: "/",
			component: _1f90e31a,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
