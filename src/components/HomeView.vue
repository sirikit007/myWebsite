<template>
	<!--HomeView-->
	<div class="main-container mx-auto flex justify-center items-center h-screen text-3xl w-full bg-teal-300">
		<div class="w-full max-w-auto text-center">
			<button v-if="!showLoginForm" @click="toggleLoginForm" class="bg-teal-600 text-white font-bold py-5 px-5 rounded-lg w-60 hover:bg-teal-800 focus:shadow-stone-100 shadow-lg shadow-stone-700">Login</button>
			<LoginForm v-if="showLoginForm"/>
		</div>
	</div>
	<!--HomeView-->
</template>

<script>
import LoginForm from './LoginForm.vue'
	export default {
		name:'HomeView',
		components: {
			LoginForm
		},
		data() {
			return {
				showLoginForm: false
			}
		},
		methods: {
			toggleLoginForm() {
				this.showLoginForm = !this.showLoginForm;
			}
		}
	}
</script>

<style scoped>

</style>
