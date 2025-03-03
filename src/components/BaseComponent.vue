<template>
	<div :style="styles"	
		ref="frameRef"
		@mouseenter="handleMouseEnter"
		@mouseleave="handleMouseLeave"
	>
		<slot></slot>
		<!-- Название рамки 
		<h2 
			:class="['text-xl', 'font-bold', 'mb-2', changeColor]"
		>
			{{ name }}
		</h2>-->
		<!-- Отображение текущих размеров рамки 
		<p>Ширина: {{ widthSveta }} px</p>
		<p>Высота: {{ heightSveta }} px</p>-->
	</div>
</template>

<script setup>
	import { ref, onMounted, onUnmounted, defineProps, computed} from 'vue';

	const props = defineProps({
		width: {
			type: String,
			default: ''
		},
		height: {
			type: String,
			default: ''
		},
		top: {
			type: String,
			default: ''
		},
		bottom: {
			type: String,
			default: ''
		},
		left: {
			type: String,
			default: ''
		},
		right: {
			type: String,
			default: ''
		},
		position: {
			type: String,
			default: ''
		},
		name: {
			type: String,
			default: ''
		},
		bColor: {
			type: String,
			default: ''
		},
		zIndex: {
			type: String,
			default: ''
		}
	});

	// Ссылки на DOM-элемент и его размеры
	const { name} = props;
	const frameRef = ref(null);
	const widthSveta = ref(0);
	const heightSveta = ref(0);
	const changeColor = ref('text-blue-500');

	let observer = null;

	const styles = computed(() => {
		const style = {
			position: props.position ? props.position : 'relative'
		}
		if (props.width) style.width = props.width;
		if (props.height) style.height = props.height;
		if (props.top) style.top = props.top;
		if (props.bottom) style.bottom = props.bottom;
		if (props.left) style.left = props.left;
		if (props.right) style.right = props.right;
		if (props.zIndex) style.zIndex = props.zIndex;
		if (props.bColor) style.backgroundColor = props.bColor;

		return style;
	})

	function handleMouseEnter() {
		changeColor.value = 'text-red-500'
	}

	function handleMouseLeave() {
		changeColor.value = 'text-blue-500'
	}
	onMounted(() => {
		// Создаем наблюдатель за изменением размеров
		observer = new ResizeObserver((entries) => {
			for (const entry of entries) {
				if (entry.target === frameRef.value) {
					widthSveta.value = entry.contentRect.width;
					heightSveta.value = entry.contentRect.height;
				}
			}
		});

		if (frameRef.value) {
			observer.observe(frameRef.value);
		}
	});

	onUnmounted(() => {
		// Отключаем наблюдатель при удалении компонента
		if (observer) {
			observer.disconnect();
		}
	});
</script>
