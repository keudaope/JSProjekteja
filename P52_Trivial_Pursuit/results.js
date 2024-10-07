document.addEventListener("DOMContentLoaded", () => {
    loadScores();

    document.getElementById('back-btn').addEventListener('click', () => {
        window.location.href = 'game.html';
    });
});

// Ladataan tulokset Local Storagesta ja näytetään ne
function loadScores() {
    // Haetaan tulokset Local Storagesta
    const scores = JSON.parse(localStorage.getItem('scores')) || [];
    
    if (scores.length === 0) {
        console.log("Ei tallennettuja tuloksia.");
        const tableBody = document.querySelector('#results-table tbody');
        const emptyRow = document.createElement('tr');
        emptyRow.innerHTML = `<td colspan="3">Ei tuloksia saatavilla.</td>`;
        tableBody.appendChild(emptyRow);
        return;
    }

    // Näytetään tulokset
    console.log("Tulokset ladattu Local Storagesta:", scores);

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
