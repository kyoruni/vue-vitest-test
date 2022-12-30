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
  }
);