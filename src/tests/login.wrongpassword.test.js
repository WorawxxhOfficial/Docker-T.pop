// tests/login.wrongpassword.test.js
const { login } = require('../login');

describe('Login - Wrong password fails', () => {
  test('should return false when password is incorrect', () => {
    // Arrange (เตรียมข้อมูล)
    const username = 'admin';
    const wrongPassword = 'wrong';

    // Act (เรียกฟังก์ชัน)
    const result = login(username, wrongPassword);

    // Assert (ตรวจผลลัพธ์)
    expect(result).toBe(false);
  });
});
