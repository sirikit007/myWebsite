<template>
  <!--LoginForm-->
  <MainNavBar v-if="showNav" />

  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-48 bg-teal-600 mx-60 rounded">
	<!-- Ваша форма логина -->
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
	  <img
		class="mx-auto h-10 w-auto"
		src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
		alt="My Logo"
	  />
	  <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
		Sign in
	  </h2>
	</div>

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
	  <form class="space-y-6" @submit.prevent="handleSubmit">
		<div>
		  <label class="block text-sm/6 font-medium text-white" for="email"
			>Email address</label
		  >
		  <div class="mt-2">
			<input
			  v-model="email"
			  class="block w-full rounded-md py-1.5 text-base text-gray-900 outline -outline-offset-1 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
			  type="email"
			  name="email"
			  id="email"
			  autocomplete="email"
			/>
		  </div>
		</div>

		<div>
		  <div class="flex items-center justify-between">
			<label class="block text-sm/6 font-medium text-white" for="password"
			  >Password</label
			>
			<div class="text-sm">
			  <a href="#" class="font-semibold text-white hover:underline"
				>Forgot password?</a
			  >
			</div>
		  </div>
		  <div class="mt-2">
			<input
			  v-model="password"
			  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
			  type="password"
			  name="password"
			  id="password"
			  autocomplete="current-password"
			/>
		  </div>
		</div>

		<div>
		  <button
			class="flex w-full justify-center border border-transparent rounded-md bg-teal-900 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:border-white box-border  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			type="submit"
		  >
			Sign In
		  </button>
		</div>
	  </form>
	</div>
  </div>
	<!--LoginForm-->
</template>

<script setup>
	import {ref, computed } from 'vue'
	import { useRoute, useRouter } from 'vue-router'
	import MainNavBar from './MainNavBar.vue'


	const route = useRoute()
	const router = useRouter()

	// Показываем NavBar только на /login
	//const showNav = computed(() => route.path == '/login')
	
	const email = ref('')
	const password = ref('')

	function handleSubmit() {
		const validEmail = 'informsvetik@gmail.com'
		const validPassword = '3032910'

		if (email.value === validEmail && password.value === validPassword) {
			router.push('/MainNavBar/main')

		} else {
			alert('The email or password is incorrect')
		}
	}
</script>

<style scoped>
	
</style>