import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

export default new Router({
    routes,
    mode: 'history',
    base: process.env.BASE_URL,
    props: (route) => ({
        to: route.query.to,
        stage: route.query.stage,
        bg: route.query.bg
    }),
    scrollBehavior(to, from, savedPosition) {

        if (savedPosition) {
            return savedPosition
        }
    }
})