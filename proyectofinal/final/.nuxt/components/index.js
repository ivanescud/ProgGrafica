export { default as Logo } from '../../components/Logo.vue'
export { default as Bar } from '../../components/bar.vue'
export { default as Loginf } from '../../components/loginf.vue'
export { default as Proyectos } from '../../components/proyectos.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyBar = import('../../components/bar.vue' /* webpackChunkName: "components/bar" */).then(c => c.default || c)
export const LazyLoginf = import('../../components/loginf.vue' /* webpackChunkName: "components/loginf" */).then(c => c.default || c)
export const LazyProyectos = import('../../components/proyectos.vue' /* webpackChunkName: "components/proyectos" */).then(c => c.default || c)
