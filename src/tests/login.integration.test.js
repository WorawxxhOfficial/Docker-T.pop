/**
 * tests/login.integration.test.js
 * ตรวจสอบ interaction ของ login function กับ DOM
 */
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Frontend Integration Test', () => {
  let dom;
  let document;

  beforeAll(() => {
    const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');
    dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });
    document = dom.window.document;
    // load login.js
    const scriptContent = fs.readFileSync(path.resolve(__dirname, '../src/login.js'), 'utf8');
    dom.window.eval(scriptContent);
  });

  test('admin login success via form', () => {
    document.getElementById('username').value = 'admin';
    document.getElementById('password').value = '1234';
    const form = document.getElementById('loginForm');
    form.dispatchEvent(new dom.window.Event('submit'));
    expect(document.getElementById('message').textContent).toBe('Login successful');
  });

  test('wrong password fails via form', () => {
    document.getElementById('username').value = 'admin';
    document.getElementById('password').value = 'wrong';
    const form = document.getElementById('loginForm');
    form.dispatchEvent(new dom.window.Event('submit'));
    expect(document.getElementById('message').textContent).toBe('Login failed');
  });
});
