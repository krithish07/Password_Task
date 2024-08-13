
// JavaScript
const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const errorMsg = document.getElementById('error-msg');
const getBtn = document.getElementById('get-btn');
const storedCredentials = document.getElementById('stored-credentials');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username && password) {
        // Store username and password in local storage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        // Display success message
        // errorMsg.textContent = 'Login successful!';
        // errorMsg.style.color = 'green';
    } else {
        // Display error message
        // errorMsg.textContent = 'Please enter both username and password';
        // errorMsg.style.color = 'red'; 
    }
});

getBtn.addEventListener('click', () => {
    // Get stored username and password from local storage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Display stored credentials
    storedCredentials.innerHTML = `
        <h2>Stored Credentials</h2>
        <p>Username: ${storedUsername}</p>
        <p>Password: ${storedPassword}</p>
    `;
});