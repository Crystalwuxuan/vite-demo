<script setup lang="ts">
import { ref } from 'vue'
import { useUser } from '../store/user'
const userStore = useUser()


defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>测试Pinia,HelloWorld{{userStore.user}}</h1>
  测试Pinia：{{ useUser.$id }}
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
