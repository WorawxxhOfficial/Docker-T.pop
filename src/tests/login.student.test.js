const { login } = require('../src/login');

test('student login success', () => {
  expect(login('student', 'abcd')).toBe(true);
});
