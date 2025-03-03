<template>
	<!--StrapiTextBegin-->
	<div v-if="textUrl">
		{{ text }}
	</div>
	<!--StrapiTextEnd-->
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

	const text = ref(null);
	const textUrl = ref(null);

	

	async function fetchText() {
		console.log('fetchText')
		try {
			textUrl.value = `http://localhost:1337/api/${props.strapiType}`
			const response = await axios.get(textUrl.value)
			console.log(`textUrl: ${textUrl.value}`);
			console.log(response);
			text.value = response.data.data[props.strapiAttr];
		} catch (error) {
			console.error('Ошибка при получении текста из Strapi:', error);
		}
	};

	onMounted(fetchText);

</script>