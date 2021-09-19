import Vue from 'vue';
import Router from 'vue-router';

const Kontakti = () => import('./views/Kontakti.vue');
const Kontakt = () => import('./views/Kontakt.vue');

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/kontakt',
            name: 'kontakt',
            component: Kontakt,
        },
        {
            path: '/kontakti',
            name: 'kontakti',
            component: Kontakti,
        },
    ],
});