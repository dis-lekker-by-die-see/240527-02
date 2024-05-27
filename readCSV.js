
let events = {};


function loadEventCSV() {

    // document.addEventListener('DOMContentLoaded', function() {
    //     fetch('/仮日程.csv')
    //         .then(response => response.text())
    //         .then(text => {

    //             const lines = text.trim().split('\n');
    //             lines.forEach(line => {
    //                 const [scheduleNumber, scheduleDate, eventNumber, category, eventCode,
    //                     eventName, eventDescription, priceCode, price] = line.split(',');
    //             if (scheduleDate && scheduleNumber && eventName) {
    //                 events[scheduleNumber.trim()] = {
    //                     scheduleDate: scheduleDate.trim(),
    //                     eventName: eventName.trim(),
    //                     category: category.trim(),
    //                     eventCode: eventCode.trim(),
    //                     eventDescription: eventDescription.trim(),
    //                     priceCode: priceCode.trim(),
    //                     price: parseFloat(price.trim())
    //                 };
    //             }
    //         });
    //         console.log('Events loaded:', events); // For debugging purposes
    //         })
    //         .catch(error => console.error('Error loading the CSV file:', error));
    // });


////////////////////


document.addEventListener('DOMContentLoaded', function() {
    fetch('/仮日程.csv')
        .then(response => response.text())
        .then(text => {
            const lines = text.trim().split('\n');

            // Parse the CSV lines and populate the events object
            lines.forEach(line => {
                const [scheduleNumber, scheduleDate, eventNumber, category, eventCode,
                    eventName, eventDescription, priceCode, price] = line.split(',');

                if (scheduleDate && scheduleNumber && eventName) {
                    events[scheduleNumber.trim()] = {
                        scheduleDate: scheduleDate.trim(),
                        eventName: eventName.trim(),
                        category: category.trim(),
                        eventCode: eventCode.trim(),
                        eventDescription: eventDescription.trim(),
                        priceCode: priceCode.trim(),
                        price: parseFloat(price.trim())
                    };
                }
            });

            console.log('Events loaded:', events); // For debugging purposes

            // Create the table element
            const table = document.createElement('table');

            // Create and append the header row
            const headerRow = document.createElement('tr');
            const headers = ['Schedule Number', 'Schedule Date', 'Event Number', 'Category', 'Event Code', 'Event Name', 'Event Description', 'Price Code', 'Price'];
            headers.forEach(headerText => {
                const header = document.createElement('th');
                header.textContent = headerText;
                headerRow.appendChild(header);
            });
            table.appendChild(headerRow);

            // Populate the table with data from the events object
            for (const key in events) {
                if (events.hasOwnProperty(key)) {
                    const event = events[key];
                    const row = document.createElement('tr');
                    const values = [key, event.scheduleDate, event.eventNumber, event.category, event.eventCode, event.eventName, event.eventDescription, event.priceCode, event.price];
                    values.forEach(cellText => {
                        const cell = document.createElement('td');
                        cell.textContent = cellText;
                        row.appendChild(cell);
                    });
                    table.appendChild(row);
                }
            }

            // Append the table to the container
            document.getElementById('tableContainer').appendChild(table);
        })
        .catch(error => console.error('Error loading the CSV file:', error));
});

}


///////////

// function displayData(events) {
//     const output = document.getElementById('output');
//     output.innerHTML = '<table>' + events.map(row => 
//         `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`
//     ).join('') + '</table>';
// }



loadEventCSV();
//displayData(events);