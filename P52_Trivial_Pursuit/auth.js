let users = [];

document.addEventListener("DOMContentLoaded", () => {
    loadUsers();

    document.getElementById('login-btn').addEventListener('click', login);
    document.getElementById('register-btn').addEventListener('click', register);
});

function loadUsers() {
    fetch('users.json')
        .then(response => response.json())
        .then(data => {
            users = data;
        });
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', username);
        window.location.href = 'game.html';
    } else {
        document.getElementById('message').innerText = 'Virheellinen käyttäjänimi tai salasana.';
    }
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (users.find(u => u.username === username)) {
        document.getElementById('message').innerText = 'Käyttäjänimi on jo olemassa.';
    } else {
        users.push({ username, password });
        updateUsersFile();
        document.getElementById('message').innerText = 'Rekisteröityminen onnistui! Voit nyt kirjautua sisään.';
    }
}

function updateUsersFile() {
    fetch('users.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(users)
    });
}
