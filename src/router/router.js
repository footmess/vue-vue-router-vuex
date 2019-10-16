import Vue from 'vue';
import Router from 'vue-router';
import App from '../App';
import home from '../pages/home';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: App,
			children: [
				{
					path: '',
					name: 'home',
					component: home
					// component: (r) => require.ensure([], () => r(require('../pages/home'), 'home'))
				},
				{
					path: '/item',
					component: (r) => require.ensure([], () => r(require('../pages/item'), 'item'))
				},
				{
					path: '/score',
					component: (r) => require.ensure([], () => r(require('../pages/score'), 'score'))
				}
			]
		}
	]
});
