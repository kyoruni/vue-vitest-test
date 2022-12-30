import { describe, test, expect } from 'vitest';
import { addTwoNums } from '@/functions';

describe(
  'functions.ts addTwoNums() test',
  () => {
    test(
      '1桁の足し算のテスト',
      () => {
        const num1 = 1;
        const num2 = 2;
        const actual = addTwoNums(num1, num2);
        const expected = 3;
        expect(actual).toBe(expected);
      }
    );
  }
);