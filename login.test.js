const { validateLogin } = require('./login');

describe('validateLogin', () => {
  test('returns true for a valid username and password', () => {
    expect(validateLogin('admin', '123456')).toBe(true);
  });

  test('returns true for another valid user', () => {
    expect(validateLogin('student', 'pass123')).toBe(true);
  });

  test('returns false for wrong password', () => {
    expect(validateLogin('admin', 'wrongpass')).toBe(false);
  });

  test('returns false when username or password is empty', () => {
    expect(validateLogin('', '123456')).toBe(false);
    expect(validateLogin('admin', '')).toBe(false);
    expect(validateLogin('', '')).toBe(false);
  });
});
