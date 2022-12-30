<script setup lang="ts">
import { ref, computed } from 'vue';
import { addTwoNums } from '@/functions';

// 足し算のテスト
const num1 = ref(5);
const num2 = ref(3);
const answer = computed((): number => {
  return addTwoNums(Number(num1.value), Number(num2.value))
});

// 要素が存在するかどうかのテスト
const isShow = ref(false);
const onClickShowButton = () => {
  isShow.value = !isShow.value
};
</script>

<template>
  <div class="app">
    <section>
      <p>足し算のテスト</p>
      <input type="nunber" data-test-id="num1" v-model="num1"/>
      +
      <input type="nunber" data-test-id="num2" v-model="num2"/>
      =
      <span data-test-id="answer">{{ answer }}</span>
    </section>
    <section>
      <p>要素が存在するかどうかのテスト</p>
      <button data-test-id="showButton" @click="onClickShowButton">表示する</button>
      <p data-test-id="isShow" v-if="isShow">こんにちは</p>
    </section>
  </div>
</template>
