const users = [
  { username: "admin", password: "1234" },
  { username: "student", password: "abcd" }
];

function login(username, password) {
  const user = users.find(u => u.username === username);
  return user ? user.password === password : false;
}

module.exports = { login };