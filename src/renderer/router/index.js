import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'conversion',
            component: require('@/components/Conversion').default,
        },
        {
            path: '*',
            redirect: '/',
        },
    ],
});
