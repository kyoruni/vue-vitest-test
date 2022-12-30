import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import { wrap } from 'module';

describe(
  'App.vue 足し算のテスト',
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

describe(
  'App.vue 要素が存在するかどうかのテスト',
  () => {
    test(
      '初期値の表示内容確認',
      () => {
        const wrapper = mount(App);
        // 要素が存在するかどうか分からない場合は、get()ではなくfind()を使う
        const actual = wrapper.find('[data-test-id="isShow"]').exists();
        const expected = false;
        expect(actual).toBe(expected);
      }
    );
    test(
      '表示するボタンを押した場合',
      async () => {
        const wrapper = mount(App);
        await wrapper.get('[data-test-id="showButton"]').trigger('click');
        const actual = wrapper.find('[data-test-id="isShow"]').exists();
        const expected = true;
        expect(actual).toBe(expected);
      }
    );
  }
);