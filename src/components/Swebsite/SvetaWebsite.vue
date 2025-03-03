<template>
	<div :class="currentStyle" :style="currentBackgroundStyle" class="min-h-screen w-full">
		<div v-if="!isChildRoute" class="flex items-center justify-center flex-col">
			<div class="flex my-24 text-slate-700 font-semibold  text-5xl">
				<StrapiImage strapiType="home-page" strapiAttr="Logo" />
				<h2>{{ title }}</h2>
			</div>
		</div>
		<router-view />
	</div>
</template>

<script>
	import axios from 'axios';
	import { useRoute } from 'vue-router';
	import StrapiImage from '../StrapiImage.vue';

	export default {
		name: 'SvetaWebsite',
		components: {
			StrapiImage
		},
	
		data() {
			return {
				route: useRoute(),
				title: 'Загрузка...', // начальное значение
				bgImage: '', // URL изображения из Strapi
			}
		},
		computed: {
			routeName() {
				return this.route.name;
			},
			isChildRoute() {
				return this.routeName !== 'SvetaWebsite';
			},
			currentStyle() {
				switch (this.routeName) {
					case 'AboutMe':
						return 'bg-gray-100 text-slate-800';
					case 'MyPhotoAlbum':
						return 'bg-blue-50 text-blue-900';
					case 'MyResume':
						return 'bg-green-50 text-green-900';
					case 'Contacts':
						return 'bg-yellow-50 text-yellow-900';
					default: 
						return 'bg-cover bg-center'
				}
			},
			currentBackgroundStyle() {
				return this.isChildRoute ? {} : { backgroundImage: `url(${this.bgImage})` }
			}
		},
		mounted() {
			this.fetchHomePageData();
		},
		methods: {
			async fetchHomePageData() {
				try {
					const response = await axios.get('http://localhost:1337/api/home-page');
					console.log(response)
					this.title = response.data.data.Title;
				} catch (error) {
					console.error('Ошибка при получении данных:', error);
					this.title = 'Ошибка загрузки данных';
				};

				try {
					const response = await axios.get('http://localhost:1337/api/home-page?populate=BG');
					//const attributes = response.data.data.attributes;
					const imageUrl = response.data.data.BG.url;
					console.log(imageUrl)
					this.bgImage = "http://localhost:1337" + imageUrl;
				} catch (error) {
					console.error('Ошибка при получении данных:', error);
				};

			}
		}
	}
</script>