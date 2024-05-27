
let events = {};


function loadEventCSV() {

    document.addEventListener('DOMContentLoaded', function() {
        fetch('/仮日程.csv')
            .then(response => response.text())
            .then(text => {

                const lines = text.trim().split('\n');
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
            })
            .catch(error => console.error('Error loading the CSV file:', error));
    });
}

function displayData(events) {
    const output = document.getElementById('output');
    output.innerHTML = '<table>' + events.map(row => 
        `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`
    ).join('') + '</table>';
}



loadEventCSV();
displayData(events);