const { login } = require('../src/login');

test('wrong password fails', () => {
  expect(login('admin', 'wrong')).toBe(false);
});
