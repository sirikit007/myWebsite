	import { createRouter, createWebHistory } from 'vue-router';
	import HomeView from '../components/HomeView.vue';
	import LoginForm from '../components/LoginForm.vue';
	import MainPage from '../components/MainPage.vue';
	import SvetaWebsite from '../components/Swebsite/SvetaWebsite.vue';
	import AboutMe from '../components/Swebsite/AboutMe.vue';
	import BaseComponent from '../components/BaseComponent.vue';
	import ProductsList from '../components/ShopPP/ProductsList.vue';
	import ShopHome from '../components/ShopPP/ShopHome.vue';
	import MainNavBar from '../components/MainNavBar.vue';
	import Shop from '../components/ShopPP/Gallery.vue';

	const router = createRouter({
		history: createWebHistory(import.meta.env.BASE_URL),
		routes: [
			{
				path: '/',
				redirect: '/MainNavBar'
			},
			{
				path: '/login',
				name: 'LoginForm',
				component: LoginForm
			},
			{
				path: '/shopHome',
				name: 'ShopHome',
				component: ShopHome,
			},
			{
				path: '/shopHome/ourProducts',
				name: 'OurProducts',
				component: ProductsList
			},
			{
				path: '/shopHome/shop',
				name: 'Shop',
				component: Shop
			},
			{
				// Родительский маршрут, где показываем главный NavBar
				path: '/MainNavBar',
				name: 'MainNavBar',
				component: MainNavBar,
				children: [
				{
					// Показывать при переходе на /MainNavBar
					path: '',
					name: 'MainNavBarHome',
					component: HomeView
				},
				
				{
				  path: '/MainNavBar/main',
				  name: 'MainPage',
				  component: MainPage
				},
			
			  ]
			},
		
			// Если нужно, можете оставить какие-то маршруты ВНЕ /MainNavBar, 
			// чтобы там не показывался главный NavBar.
			// Например, /admin, /auth, и т.д.
		  ]
	})

	export default router;
