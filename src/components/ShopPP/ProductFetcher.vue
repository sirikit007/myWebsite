<template>
	<!--ProductFetcher-->
	<div>
		<h2>Список товаров</h2>
		<ProductsList :products="products" />
	</div>
	<!--ProductFetcher-->
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import axios from 'axios'
	import ProductsList from '../ShopPP/ProductsList.vue'

	const products = ref([])

	onMounted(() => {
	axios.get('http://localhost:1337/products') // Замените URL на адрес вашего Strapi
		.then(response => {
		products.value = response.data
		})
		.catch(error => {
		console.error("Ошибка при загрузке товаров:", error)
		})
	})
</script>