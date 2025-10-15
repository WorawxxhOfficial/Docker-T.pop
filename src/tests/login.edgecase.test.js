const { login } = require('../login');

test('empty username/password fails', () => {
  expect(login('', '')).toBe(false);
});

test('null username/password fails', () => {
  expect(login(null, null)).toBe(false);
});