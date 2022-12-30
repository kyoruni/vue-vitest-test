import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '@/App.vue';

describe(
  'App.vueのテスト',
  () => {
    test(
      '初期値の表示内容確認',
      () => {
        const wrapper = mount(App);
        const actual = wrapper.get('[data-test-id="answer"]').text();
        const expected = '8';
        expect(actual).toBe(expected);
      }
    );
    test(
      '左に10,右に9を入力した場合',
      async () => {
        const wrapper = mount(App);
        // ユーザーの画面操作の代わりになるものは非同期で行われるようになっている
        // 入力が終わってから次に進みたいので、awaitが必要
        await wrapper.get('[data-test-id="num1"]').setValue(10);
        await wrapper.get('[data-test-id="num2"]').setValue(9);
        const actual = wrapper.get('[data-test-id="answer"]').text();
        const expected = '19';
        expect(actual).toBe(expected);
      }
    );
  }
);