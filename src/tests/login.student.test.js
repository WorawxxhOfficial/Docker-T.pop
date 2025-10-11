const { login } = require('../login');

test('student login success', () => {
  expect(login('student', 'abcd')).toBe(true);
});
