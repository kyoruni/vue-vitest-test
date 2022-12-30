<script setup lang="ts">
import { ref, computed } from 'vue';
import { addTwoNums } from '@/functions';

const num1 = ref(5);
const num2 = ref(3);
const answer = computed((): number => {
  return addTwoNums(num1.value, num2.value);
});
</script>

<template>
  <p>{{ num1 }}+{{ num2 }}={{ answer }}</p>
</template>
