import { describe, test, expect } from 'vitest';
import { addTwoNums, devideTwoNums } from '@/functions';

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

describe(
  'functions.ts devideTwoNums() test',
  () => {
    test(
      '1桁の割り算のテスト',
      () => {
        const num1 = 6;
        const num2 = 2;
        const actual = devideTwoNums(num1, num2);
        const expected = 3;
        expect(actual).toBe(expected);
      }
    );
    test(
      '分子が0のテスト',
      () => {
        const num1 = 0;
        const num2 = 3;
        const actual = devideTwoNums(num1, num2);
        const expected = 0;
        expect(actual).toBe(expected);
      }
    );
    test(
      '分母が0のテスト',
      () => {
        const num1 = 3;
        const num2 = 0;
        const actual = devideTwoNums(num1, num2);
        const expected = Infinity;
        expect(actual).toBe(expected);
      }
    );
  }
);