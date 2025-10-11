// src/tests/login.nonuser.test.js
// Test Case 4: Non-existing user fails

const { login } = require('../login');

describe('Login - Non-existing user fails', () => {
  test('should return false when username does not exist', () => {
    // Arrange
    const username = 'ghostuser';
    const password = '12345';

    // Act
    const result = login(username, password);

    // Assert
    expect(result).toBe(false);
  });
});
