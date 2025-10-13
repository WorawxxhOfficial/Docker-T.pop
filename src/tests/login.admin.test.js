const { login } = require('../login');

describe('Admin Login Test', () => {
  test('should return true when admin uses correct password', () => {
    const result = login('admin', '1234');
    expect(result).toBe(true);
  });

  test('should return false when admin uses wrong password', () => {
    const result = login('admin', 'wrongpass');
    expect(result).toBe(false);
  });

  test('should return false when admin username is incorrect', () => {
    const result = login('Admin', '1234'); // ตัวใหญ่ไม่ตรง
    expect(result).toBe(false);
  });
});
