const cron = require('node-cron');
const { fetchMarketData } = require('../services/priceService');
const { fetchCryptoNews } = require('../services/newsService');

const startIngestionJob = () => {
    // Run every 5 minutes
    cron.schedule('*/5 * * * *', async () => {
        console.log('Running Data Ingestion Job...');
        try {
            await fetchMarketData();
            await fetchCryptoNews();
            console.log('Data Ingestion Job Completed.');
        } catch (error) {
            console.error('Data Ingestion Job Failed:', error);
        }
    });

    console.log('Data Ingestion Job scheduled (every 5 minutes).');
};

module.exports = { startIngestionJob };
