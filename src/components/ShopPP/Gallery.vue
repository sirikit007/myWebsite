

<template>
	<!--Gallery-->
	<div style="position: relative; width: 100%; height: 100vh; background: white;">
		<BaseComponent 
			class="top-0 left-0 right-0 p-6 bg-white flex justify-between w-full px-24"
			position="fixed"
			zIndex="2"
		>
			<div>
				<StrapiImage strapiType="home-page" strapiAttr="Logo" />
			</div>
			<NavBar />
			
			<div class="flex w-48 items-center justify-between">
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
					</svg>
				</div>
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
					</svg>
				</div>
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
					</svg>
				</div>
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
					</svg>
				</div>
			</div>
		</BaseComponent>
		<BaseComponent class="bg-gray-100 w-full"
			top="200px"
			left="0"
		>
			<div class="h-52 flex px-[12%]">
				<div class="flex flex-col justify-center text-left">
					<h1 class="font-normal text-5xl pb-6">Gallery</h1>
					<StrapiText strapiType="home-page" strapiAttr="Text"  class="text-3xl"/>
				</div>
			</div>
			
		</BaseComponent>
		<BaseComponent class="flex flex-col pt-6 w-full justify-center"
			top="200px"
		>
			<BaseComponent class="flex flex-col py-4 px-[12%] items-center"
				
				zIndex="1"
				width="100%"
			>
				<div class="max-[2200px]"
				>
					<div class="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
						<div class="relative overflow-hidden aspect-[4/3]">
							<img class="h-full w-full object-cover" src="../../../public/images/PPShop/photo01.jpeg " alt="">
						</div>
						<div class="relative overflow-hidden aspect-[4/3]">
							<img class="h-full w-full object-cover" src="../../../public/images/PPShop/photo02.webp" alt="">
						</div>
						<div class="relative overflow-hidden aspect-[4/3]">
							<img class="h-full w-full object-cover" src="../../../public/images/PPShop/photo03.webp" alt="">
						</div>
						<div class="relative overflow-hidden aspect-[4/3]">
							<img class="h-full w-full object-cover" src="../../../public/images/PPShop/photo04.webp" alt="">
						</div>
						<div class="relative overflow-hidden aspect-[4/3]">
							<img class="h-full w-full object-cover" src="../../../public/images/PPShop/photo05.webp" alt="">
						</div>
						<div class="relative overflow-hidden aspect-[4/3]">
							<img class="h-full w-full object-cover" src="../../../public/images/PPShop/photo06.webp" alt="">
						</div>
					</div>
					<BaseComponent
						width="100%"
						height="500px"
					>
						<div class="flex flex-col items-center pt-24">
							<div>
								<h2 class="text-5xl">What our amazing customers say ...</h2>
								<div class="flex pt-2">
									<div>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
											<path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
										</svg>
									</div>
									<div>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
											<path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
										</svg>
									</div>
									<div>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
											<path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
										</svg>
									</div>
									<div>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
											<path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
										</svg>
									</div>
									<div>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
											<path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
										</svg>
									</div>
								</div>
								<p class="text-lg">from 466 reviews</p>
							</div>
							<div class="flex">
								<div class="p-4 border border-slate-600 m-2">
									<h3>Review 1</h3>
								</div>
								<div class="p-4 border border-slate-600 m-2">
									<h3>Review 1</h3>
								</div>
								<div class="p-4 border border-slate-600 m-2">
									<h3>Review 1</h3>
								</div>
							</div>
						</div>
					</BaseComponent>
					<div>
						<div>
							<h4>Lightning shipping</h4>
							<p>1-2 Day delivery to most areas.</p>
						</div>
						<div>
							<h4>Trusted by 1000's of Aussies</h4>
							<p>We sell a potty on average every 20 minutes in Australia.</p>
						</div>
						<div>
							<h4>100% Natural</h4>
							<p>Handmade from local Australian timber, in Australia.</p>
						</div>
						<div>
							<h4>Platinum Customer Service</h4>
							<p>Enjoy renowned five star, traditional, local customer service.</p>
						</div>
					</div>
				</div>
			</BaseComponent>
			<hr>
		</BaseComponent>
		<router-view />
	</div>
	<!--Gallery-->
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import { useRoute } from 'vue-router';
	import BaseComponent from '../BaseComponent.vue';
	import StrapiImage from '../StrapiImage.vue';
	import StrapiText from '../StrapiText.vue';
	import NavBar from '../NavBar.vue'  // Импорт NavBar
	

	const route = useRoute();
	const title = ref('Загрузка...') // начальное значение
	const bgImage = ref('') // URL изображения из Strapi
</script>