let users = [];

document.addEventListener("DOMContentLoaded", () => {
    loadUsers();

    document.getElementById('login-btn').addEventListener('click', login);
    document.getElementById('register-btn').addEventListener('click', register);
});

function loadUsers() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
        users = JSON.parse(storedUsers);
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', username);  // Tallennetaan kirjautunut käyttäjä
        localStorage.setItem('loggedIn', true);  // Kirjautumistila
        window.location.href = 'game.html';  // Ohjataan pelisivulle
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
        localStorage.setItem('users', JSON.stringify(users));  // Tallennetaan uudet käyttäjät
        document.getElementById('message').innerText = 'Rekisteröityminen onnistui! Voit nyt kirjautua sisään.';
    }
}
