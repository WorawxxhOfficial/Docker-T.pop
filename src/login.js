function login(username, password) {
  const users = {
    admin: '1234',
    student: 'abcd',
  };
  return users[username] === password;
}

module.exports = { login };

// ✅ Run only in browser
if (typeof document !== 'undefined') {
  document.getElementById('loginForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const result = login(username, password);
    alert(result ? "Login success" : "Login failed");
  });
}
