const { login } = require('../src/login');

test('admin login success', () => {
  expect(login('admin', '1234')).toBe(true);
});
