document.addEventListener('DOMContentLoaded', function() {
    fetch('/仮日程.csv')
        .then(response => response.text())
        .then(text => {
            // Split the text into lines
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





// let events = {};

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

//         const tableContainer = document.getElementById('tableContainer');

//         events.forEach(e => {
//             tableContainer.innerHTML = `
//             <p>${e.eventCode}</p>`
//         })



//         })
//         .catch(error => console.error('Error loading the CSV file:', error));
// });








// // document.addEventListener('DOMContentLoaded', function() {
// //     fetch('/仮日程.csv')
// //         .then(response => response.text())
// //         .then(text => {
// //             const lines = text.trim().split('\n');

// //             // Parse the CSV lines and populate the events object
// //             lines.forEach(line => {
// //                 const [scheduleNumber, scheduleDate, eventNumber, category, eventCode,
// //                     eventName, eventDescription, priceCode, price] = line.split(',');

// //                 if (scheduleDate && scheduleNumber && eventName) {
// //                     events[scheduleNumber.trim()] = {
// //                         scheduleNumber: scheduleNumber.trim(),
// //                         scheduleDate: scheduleDate.trim(),
// //                         eventNumber: eventNumber ? eventNumber.trim() : '',
// //                         category: category ? category.trim() : '',
// //                         eventCode: eventCode ? eventCode.trim() : '',
// //                         eventName: eventName.trim(),
// //                         eventDescription: eventDescription ? eventDescription.trim() : '',
// //                         priceCode: priceCode ? priceCode.trim() : '',
// //                         price: price ? parseFloat(price.trim()) : ''
// //                     };
// //                 }
// //             });

// //             console.log('Events loaded:', events); // For debugging purposes



// //             // // Create the table element
// //             // const table = document.createElement('table');

// //             // // Create and append the header row
// //             // const headerRow = document.createElement('tr');
// //             // const headers = ['Schedule Number', 'Schedule Date', 'Event Number', 'Category', 'Event Code', 'Event Name', 'Event Description', 'Price Code', 'Price'];
// //             // headers.forEach(headerText => {
// //             //     const header = document.createElement('th');
// //             //     header.textContent = headerText;
// //             //     headerRow.appendChild(header);
// //             // });
// //             // table.appendChild(headerRow);

// //             // // Populate the table with data from the events object
// //             // for (const key in events) {
// //             //     if (events.hasOwnProperty(key)) {
// //             //         const event = events[key];
// //             //         const row = document.createElement('tr');
// //             //         const values = [
// //             //             event.scheduleNumber, 
// //             //             event.scheduleDate, 
// //             //             event.eventNumber, 
// //             //             event.category, 
// //             //             event.eventCode, 
// //             //             event.eventName, 
// //             //             event.eventDescription, 
// //             //             event.priceCode, 
// //             //             event.price
// //             //         ];
// //             //         values.forEach(cellText => {
// //             //             const cell = document.createElement('td');
// //             //             cell.textContent = cellText;
// //             //             row.appendChild(cell);
// //             //         });
// //             //         table.appendChild(row);
// //             //     }
// //             // }

// //             // // Append the table to the container
// //             // document.getElementById('tableContainer').appendChild(table);


// //         })
// //         .catch(error => console.error('Error loading the CSV file:', error));
// // });









// // let events = {};
// // document.addEventListener('DOMContentLoaded', function() {
// //     fetch('/仮日程.csv')
// //         .then(response => response.text())
// //         .then(text => {
// //             const lines = text.trim().split('\n');

// //             // Parse the CSV lines and populate the events object
// //             lines.forEach(line => {
// //                 const [scheduleNumber, scheduleDate, eventNumber, category, eventCode,
// //                     eventName, eventDescription, priceCode, price] = line.split(',');

// //                 if (scheduleDate && scheduleNumber && eventName) {
// //                     events[scheduleNumber.trim()] = {
// //                         scheduleDate: scheduleDate.trim(),
// //                         eventName: eventName.trim(),
// //                         category: category.trim(),
// //                         eventCode: eventCode.trim(),
// //                         eventDescription: eventDescription.trim(),
// //                         priceCode: priceCode.trim(),
// //                         price: parseFloat(price.trim())
// //                     };
// //                 }
// //             });

// //             console.log('Events loaded:', events); // For debugging purposes

// //             // Create the table element
// //             const table = document.createElement('table');

// //             // Create and append the header row
// //             const headerRow = document.createElement('tr');
// //             const headers = ['Schedule Number', 'Schedule Date', 'Event Number', 'Category', 'Event Code', 'Event Name', 'Event Description', 'Price Code', 'Price'];
// //             headers.forEach(headerText => {
// //                 const header = document.createElement('th');
// //                 header.textContent = headerText;
// //                 headerRow.appendChild(header);
// //             });
// //             table.appendChild(headerRow);

// //             // Populate the table with data from the events object
// //             for (const key in events) {
// //                 if (events.hasOwnProperty(key)) {
// //                     const event = events[key];
// //                     const row = document.createElement('tr');
// //                     const values = [key, event.scheduleDate, event.eventNumber, event.category, event.eventCode, event.eventName, event.eventDescription, event.priceCode, event.price];
// //                     values.forEach(cellText => {
// //                         const cell = document.createElement('td');
// //                         cell.textContent = cellText;
// //                         row.appendChild(cell);
// //                     });
// //                     table.appendChild(row);
// //                 }
// //             }

// //             // Append the table to the container
// //             document.getElementById('tableContainer').appendChild(table);
// //         })
// //         .catch(error => console.error('Error loading the CSV file:', error));
// // });
