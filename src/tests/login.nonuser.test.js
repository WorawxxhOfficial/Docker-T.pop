const { login } = require('../login');

test('non-existing user fails', () => {
  expect(login('ghost', '1234')).toBe(false);
});
