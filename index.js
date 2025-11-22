require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const { startIngestionJob } = require('./src/jobs/ingestionJob');

const app = express();
const port = process.env.PORT || 3000;

// Connect to Database
connectDB();

// Start Background Jobs
startIngestionJob();

app.get('/', (req, res) => {
    res.send('Hello World! Backend is running.');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
