// call ft login from login.js
const { login } = require('../login');

describe('Login Function', () => {
  test('student login success', () => {
    const username = 'student';
    const password = 'abcd';

    // call ft login
    const result = login(username, password);

    // Check true
    expect(result).toBe(true);
  });
});
