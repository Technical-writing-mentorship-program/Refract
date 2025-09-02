<template>
	<div class="counter">
		<button @click="count++" class="btn">Count Is: {{ count }}</button>
	</div>
</template>

<script setup>
	import { ref } from "vue";
	const count = ref(0);
</script>
