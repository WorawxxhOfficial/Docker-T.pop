const { login } = require('../login');

test('admin login success', () => {
  expect(login('admin', '1234')).toBe(true);
});
