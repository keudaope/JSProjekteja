document.addEventListener("DOMContentLoaded", () => {
    // Tarkistetaan, onko käyttäjä kirjautunut sisään ja että currentUser ei ole null
    const loggedIn = localStorage.getItem('loggedIn');
    const currentUser = localStorage.getItem('currentUser');

    if (!loggedIn || !currentUser) {
        // Jos ei ole kirjautunut tai käyttäjänimi puuttuu, ohjataan kirjautumissivulle
        window.location.href = 'index.html';
        return;
    }

    loadScores();

    document.getElementById('back-btn').addEventListener('click', () => {
        window.location.href = 'game.html';
    });
});

// Ladataan tulokset Local Storagesta
function loadScores() {
    const scores = JSON.parse(localStorage.getItem('scores')) || [];
    const tableBody = document.querySelector('#results-table tbody');
    tableBody.innerHTML = '';

    scores.forEach(score => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${score.username}</td>
            <td>${score.score}</td>
            <td>${score.timeSpent}</td>
        `;
        tableBody.appendChild(row);
    });
}
