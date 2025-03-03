<template>
	<!--ProductsList-->
	<div style="position: relative; width: 100%; height: 100vh; background: white;">
			<NavBar />
			
			<h1 class="pt-8">Welcome to Our Products!</h1>

			<div class="product-list">
				<div v-for="(product, index) in products" :key="index" class="product-item">
					
					<h3>{{ product.name }}</h3>
					<img :src="product.picture" alt="Изображение товара" />
					<p>Количество: {{ product.quantity }}</p>
				</div>
			</div>
	
	</div>
	<!--ProductsList-->

</template>

<script setup>
	import NavBar from '../NavBar.vue'
	
	defineOptions({
		name: 'ProductsList'
	})

	const props = defineProps({
		products: {
			type: Array,
			required: true
		}
	})
</script>