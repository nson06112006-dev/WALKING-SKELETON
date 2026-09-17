const users = [
  { username: 'admin', password: '12345' },
  { username: 'student', password: 'pass123' }
];

function validateLogin(username, password) {
  if (!username || !password) {
    return false;
  }

  return users.some(
    (user) => user.username === username && user.password === password
  );
}

function login(user, pass) {
  if (user === 'admin' && pass === '123') {
    return true;
  }

  if (user === 'admin' && pass !== '123') {
    return false;
  }

  if (validateLogin(user, pass)) {
    return true;
  }

  return 'tên đăng nhập hoặc mật khẩu bị sai';
}

module.exports = login;
module.exports.validateLogin = validateLogin;
module.exports.users = users;
