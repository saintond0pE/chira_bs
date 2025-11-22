const axios = require('axios');
const Article = require('../models/Article');

const NEWS_API_KEY = process.env.NEWS_API_KEY;
const NEWS_API_URL = 'https://newsapi.org/v2/everything';

const fetchCryptoNews = async () => {
    if (!NEWS_API_KEY) {
        console.warn('NEWS_API_KEY is not set. Skipping news fetch.');
        return [];
    }

    try {
        const response = await axios.get(NEWS_API_URL, {
            params: {
                q: 'cryptocurrency OR bitcoin OR ethereum',
                language: 'en',
                sortBy: 'publishedAt',
                apiKey: NEWS_API_KEY
            }
        });

        const articles = response.data.articles;
        console.log(`Fetched ${articles.length} articles from NewsAPI`);

        for (const article of articles) {
            if (!article.url) continue;

            await Article.findOneAndUpdate(
                { url: article.url },
                {
                    title: article.title,
                    source: article.source.name,
                    publishedAt: article.publishedAt,
                    summary: article.description,
                    // TODO: Add sentiment analysis here later
                },
                { upsert: true }
            );
        }

        return articles;
    } catch (error) {
        console.error('Error fetching news:', error.message);
        return [];
    }
};

module.exports = { fetchCryptoNews };
