document.addEventListener('DOMContentLoaded', function() {
    fetch('仮日程.csv') // Correct the path as needed
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(text => {
            const lines = text.trim().split('\n');
            if (lines.length === 0) return;

            // Extract column names
            const headers = lines[0].split(',');

            // Create the table element
            const table = document.createElement('table');

            // Create and append the header row
            const headerRow = document.createElement('tr');
            headers.forEach(headerText => {
                const header = document.createElement('th');
                header.textContent = headerText.trim();
                headerRow.appendChild(header);
            });
            table.appendChild(headerRow);

            // Populate the table with data rows
            for (let i = 1; i < lines.length; i++) {
                const row = document.createElement('tr');
                const cells = lines[i].split(',');
                cells.forEach(cellText => {
                    const cell = document.createElement('td');
                    cell.textContent = cellText.trim();
                    row.appendChild(cell);
                });
                table.appendChild(row);
            }

            // Append the table to the container
            document.getElementById('tableContainer').appendChild(table);
        })
        .catch(error => console.error('Error loading the CSV file:', error));
});
