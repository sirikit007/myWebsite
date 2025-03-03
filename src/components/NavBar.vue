<template>
	<!--NavBar-->
	<div class="flex items-center justify-center">
		<div v-if="isShopSection">
			<!--Альтернативная навигация-->
			<div class="flex gap-x-6 justify-center items-center text-xl">

				<router-link  to="/shopHome"class="hover:underline  text-slate-900">Shop Home</router-link>
				<a href="" class="hover:underline text-slate-900">Order a Potty</a>
				<router-link  to="/shopHome/ourProducts"class="hover:underline  text-slate-900">Our Products</router-link>
				<a href="" class="hover:underline text-slate-900">How it works</a>
				<a href="" class="hover:underline text-slate-900">Turf Guide</a>
				<router-link  to="/shopHome/shop"class="hover:underline  text-slate-900">Gallery</router-link>
				<a href="" class="hover:underline text-slate-900">FAQs</a>
			</div>
		</div>


		<div v-else-if="isSvetaWebsite" class="bg-slate-700 p-4">
			<!--Альтернативная навигация-->
			<div class="flex gap-x-4 justify-center items-center text-white">
				<svg class="h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
				</svg>

				<router-link  to="/main/SvetaWebsite/AboutMe"class="hover:underline">About Me</router-link>
				<a href="" class="hover:underline">My PhotoAlbom</a>
				<a href="" class="hover:underline">My Resume</a>
				<a href="" class="hover:underline">Contacts</a>
			</div>
		</div>

		<div v-else-if="isAboutMe" class="bg-slate-700 p-4">
			<!--Альтернативная навигация-->
			<div class="flex gap-x-4 justify-center items-center text-white">
				<svg class="h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
				</svg>

				<router-link  to="/MainNavBar/main/SvetaWebsite/AboutMe"class="underline">About Me</router-link>
				<a href="" class="hover:underline">My PhotoAlbum</a>
				<a href="" class="hover:underline">My Resume</a>
				<a href="" class="hover:underline">Contacts</a>
			</div>
		</div>

		<div v-else>
			<!--Desktop-->
			<div class="px-4 py-4 bg-green-100 hidden sm:block">
				<div class="flex gap-x-4 justify-center items-center">
					<svg class="h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
					</svg>
					<router-link to="/main/SvetaWebsite">Sveta Website</router-link>
					<router-link to="/main/BaseComponent">Base Component</router-link>
					<a href="#">Link 3</a>
					<a href="#">Link 4</a>
				</div>
			</div>

			<!--Mobile-->
			<div class="px-4 py-2 bg-green-100 sm:hidden">
				<div>
					<button @click="navOpen = !navOpen">
						<svg v-show="!navOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
						<svg v-show="navOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<nav v-show="navOpen" class="flex gap-x-4">
					<img class="h-8" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="My Logo">
					<a href="#">Link 1</a>
					<a href="#">Link 2</a>
					<a href="#">Link 3</a>
					<a href="#">Link 4</a>
				</nav>
			</div>
		
			
		</div>
	</div>
	<!--NavBar	-->
</template>

<script setup>
	import { computed, ref } from 'vue';
	import { useRoute } from 'vue-router';

	const navOpen = ref(false);
	const route = useRoute();
	//const isSvetaWebsite = computed(() => route.path === '/MainNavBar/main/SvetaWebsite');
	//const isAboutMe = computed(() => route.path === '/MainNavBar/main/SvetaWebsite/AboutMe');
	const isShopSection = computed(() => route.path.startsWith('/shopHome'))



	

</script>