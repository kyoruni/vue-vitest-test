<script setup lang="ts">
import { ref, computed } from 'vue';
import { addTwoNums } from '@/functions';

const num1 = ref(5);
const num2 = ref(3);
const answer = computed((): number => {
  return addTwoNums(Number(num1.value), Number(num2.value))
});
</script>

<template>
  <div class="app">
    <input type="nunber" data-test-id="num1" v-model="num1"/>
    +
    <input type="nunber" data-test-id="num2" v-model="num2"/>
    =
    <span data-test-id="answer">{{ answer }}</span>
  </div>
</template>
