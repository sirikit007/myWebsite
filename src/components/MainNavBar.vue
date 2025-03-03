<template>
	<!--MainNavBar-->
	<div >
		<nav v-if="showNav" class="flex justify-center space-x-4 py-4 bg-gray-100">
			<router-link to="/" class="text-blue-500 hover:underline">Home</router-link>
			<router-link to="/login" class="text-blue-500 hover:underline">Login</router-link>
			<router-link to="/MainNavBar/main" class="text-blue-500 hover:underline">Main</router-link>
			<router-link to="/shopHome" class="text-blue-500 hover:underline">Shop</router-link>
		</nav>
		<router-view></router-view>
	</div>
	<!--MainNavBar-->

</template>

<script>
	export default {
		name: 'MainNavBar',
		data() {
			return {
				showNav: true,
			}
		}
	}
</script>