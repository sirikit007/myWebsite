<template>
	<!--StrapiImageBegin-->
	<img v-if="imageUrl" :src="imageUrl" alt="Strapi Image" />
	<!--StrapiImageEnd-->
</template>

<script setup>
	import { ref, onMounted, defineProps} from 'vue';
	import axios from 'axios'

	const props = defineProps({
		strapiType: {
			type: String,
			required: true
		},
		strapiAttr: {
			type: String,
			required: true
		},
	});

	const imageUrl = ref(null);

	

	async function fetchImage() {
		console.log('fetchImage')
		try {
			const url = `http://localhost:1337/api/${props.strapiType}?populate=${props.strapiAttr}`
			const response = await axios.get(url)
			console.log(`url: ${url}`);
			console.log(response);
			let iUrl = response.data.data[props.strapiAttr].url;
			iUrl = 'http://localhost:1337' + iUrl;
			console.log(`iUrl: ${iUrl}`);
			imageUrl.value = iUrl;
		} catch (error) {
			console.error('Ошибка при получении изображения из Strapi:', error)
		}
	};

	onMounted(fetchImage);

</script>