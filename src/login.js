const users = [
  { username: 'admin', password: '1234' },
  { username: 'student', password: 'abcd' }
];

function login(username, password) {
  const user = users.find(u => u.username === username);
  if (!user) return false;
  return user.password === password;
}

// For frontend form
document.getElementById('loginForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const msg = login(username, password) ? 'Login successful' : 'Login failed';
  document.getElementById('message').innerText = msg;
});

module.exports = { login };
