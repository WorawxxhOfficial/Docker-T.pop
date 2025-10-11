const { login } = require('../login');

test('wrong password fails', () => {
  expect(login('admin', 'wrong')).toBe(false);
});
