const { login } = require('../login');

test('admin login success', () => {
  expect(login('admin', '1234')).toBe(true);
});

test('student login success', () => {
  expect(login('student', 'abcd')).toBe(true);
});

test('wrong password fails', () => {
  expect(login('admin', 'wrong')).toBe(false);
});

test('non-existing user fails', () => {
  expect(login('ghost', '1234')).toBe(false);
});
