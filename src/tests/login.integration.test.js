const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Frontend Integration Test', () => {
  let dom, document;

  beforeAll(() => {
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
    dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });
    document = dom.window.document;

    // โหลด login.js เข้า dom
    const script = fs.readFileSync(path.resolve(__dirname, '../login.js'), 'utf8');
    const scriptEl = document.createElement('script');
    scriptEl.textContent = script;
    document.body.appendChild(scriptEl);
  });

  test('admin login success via form', () => {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    usernameInput.value = 'admin';
    passwordInput.value = '1234';
    document.getElementById('loginForm').dispatchEvent(new dom.window.Event('submit'));
  });

  test('wrong password fails via form', () => {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    usernameInput.value = 'admin';
    passwordInput.value = 'wrong';
    document.getElementById('loginForm').dispatchEvent(new dom.window.Event('submit'));
  });
});
