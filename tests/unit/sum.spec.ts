// const sum = require("../../src/demo.ts").default;
import yd from '@utils/yd';

describe('函数单元测试', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(yd.sum(1, 2)).toBe(3);
  });
});
