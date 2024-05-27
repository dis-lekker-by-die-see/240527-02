document.addEventListener('DOMContentLoaded', function() {
    fetch('/02 - 仮日程.csv')
        .then(response => response.text())
        .then(text => {
            const data = parseCSV(text);
            displayData(data);
        })
        .catch(error => console.error('Error loading the CSV file:', error));
});

function parseCSV(text) {
    const lines = text.trim().split('\n');
    return lines.map(line => line.split(','));
}

function displayData(data) {
    const output = document.getElementById('output');
    output.innerHTML = '<table>' + data.map(row => 
        `<tr>s${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`
    ).join('') + '</table>';
}
