<template>
	<div>
		<NavBar />
		<router-view /> 
	</div>
	<div style="position: relative; width: 2000px; height: 1200px; border: 1px solid #333;">
		<BaseComponent
			height="1000px"
			top="100px"
			left="120px"
			right="50px"
			name="Main"
			bColor="gray"
		>
			<BaseComponent
				height="800px"
				bottom="50px"
				width="1000px"
				left="200px"
				name="TheSecond"
				bColor="yellow"
				zIndex="10"
			/>
			<BaseComponent
				width="600px"
				height="350px"
				bottom="150px"
				right="220px"
				name="TheThirdth"
				bColor="green"
				zIndex="100"
			>
				<BaseComponent
					width="300px"
					height="150px"
					top="60px"
					right="30px"
					name="TheLastOne"
					bColor="red"
				/>
			</BaseComponent>
		</BaseComponent>
	</div>
</template>

<script setup>
	import NavBar from './NavBar.vue';
	import BaseComponent from './BaseComponent.vue';
</script>