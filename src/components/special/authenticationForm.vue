<script setup>
	import { ref } from 'vue'

	const props = defineProps({
		buttonText: String
	})
	const emit = defineEmits(['functionEmit'])
	const email = ref()
	const password = ref()
	function triggerEmit(){
		emit('functionEmit',email.value,password.value)
	}
</script>

<template>
	<v-form>
		<v-text-field
			name="email"
			type="email"
			placeholder="email"
			v-model="email"
			cols="20"
		/>
		<v-text-field
			type="password"
			placeholder="password"
			v-model="password"
			cols="20"
		/>
		<v-btn
			type="button"
			@click="()=>{
				triggerEmit()
			}"
		>
			{{ buttonText }}
		</v-btn>
	</v-form>
</template>