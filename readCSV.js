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


document.addEventListener('DOMContentLoaded', function() {
    fetch('全クラブ事前.csv')
        .then(response => response.text())
        .then(text => parseCSV(text))
        .catch(error => console.error('Error loading the CSV file:', error));
});

function parseCSV(text) {
    const lines = text.trim().split('\n');
    const tables = {};
    let currentTable = null;
    let columnNames = [];

    lines.forEach(line => {
        line = line.trim();
        if (line.startsWith('<') && line.endsWith('>')) {
            // New table found
            currentTable = line.slice(1, -1);
            tables[currentTable] = [];
            columnNames = [];
        } else if (currentTable && columnNames.length === 0) {
            // Column names
            columnNames = line.split(',');
        } else if (currentTable) {
            // Data rows
            const row = line.split(',');
            const rowData = {};
            columnNames.forEach((col, index) => {
                rowData[col.trim()] = row[index].trim();
            });
            tables[currentTable].push(rowData);
        }
    });

    console.log('Parsed Tables:', tables);
    displayTables(tables);
}

function displayTables(tables) {
    const container = document.getElementById('tablesContainer');

    for (const tableName in tables) {
        if (tables.hasOwnProperty(tableName)) {
            const tableData = tables[tableName];

            // Create table element
            const table = document.createElement('table');

            // Create table caption
            const caption = document.createElement('caption');
            caption.textContent = tableName;
            table.appendChild(caption);

            // Create header row
            const headerRow = document.createElement('tr');
            const columns = Object.keys(tableData[0]);
            columns.forEach(column => {
                const header = document.createElement('th');
                header.textContent = column;
                headerRow.appendChild(header);
            });
            table.appendChild(headerRow);

            // Create data rows
            tableData.forEach(rowData => {
                const row = document.createElement('tr');
                columns.forEach(column => {
                    const cell = document.createElement('td');
                    cell.textContent = rowData[column];
                    row.appendChild(cell);
                });
                table.appendChild(row);
            });

            // Append the table to the container
            container.appendChild(table);
        }
    }
}
