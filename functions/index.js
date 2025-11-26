const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Firebase Cloud Functions!');
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

exports.api = functions.https.onRequest(app);
