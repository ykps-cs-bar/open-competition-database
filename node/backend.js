const express = require('express');
const mongodb = require('mongodb');

const app = express();
const mongodb_url = 'mongodb://localhost:27017';
const db_name = '';

app.get('/', (req, res) => {
    // Connect to MongoDB
    mongodb.MongoClient.connect(mongodb_url, (err, client) => {
        if (err) {
            console.error(err);
            res.status(500);
            return;
        }

        // Fetch timeline events from the database
        fetch('/timeline')
            .then(response => response.json())
            .then(events => {
                // Create timeline event elements
                events.forEach(event => {
                    const eventElement = document.createElement('div');
                    eventElement.classList.add('timeline-event');
                    eventElement.innerHTML = `
                        <h3>${event.title}</h3>
                        <p>${event.description}</p>
                        <p>${event.date}</p>
                    `;
                    timelineContainer.appendChild(eventElement);
                });
            })
            .catch(error => {
                console.error('Error fetching timeline events:', error);
            });

    });
});

app.listen(2333, () => {
    console.log('Server started on port 2333');
});