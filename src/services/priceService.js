const axios = require('axios');
const Token = require('../models/Token');

const COINGECKO_API_URL = process.env.COINGECKO_API_URL || 'https://api.coingecko.com/api/v3';

const fetchMarketData = async () => {
    try {
        const response = await axios.get(`${COINGECKO_API_URL}/coins/markets`, {
            params: {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: 100,
                page: 1,
                sparkline: false,
                price_change_percentage: '1h,24h'
            }
        });

        const coins = response.data;
        console.log(`Fetched ${coins.length} coins from CoinGecko`);

        for (const coin of coins) {
            await Token.findOneAndUpdate(
                { symbol: coin.symbol.toUpperCase() },
                {
                    name: coin.name,
                    currentPrice: coin.current_price,
                    marketCap: coin.market_cap,
                    totalVolume: coin.total_volume,
                    priceChange24h: coin.price_change_percentage_24h,
                    priceChange1h: coin.price_change_percentage_1h_in_currency,
                    lastUpdated: new Date(),
                    $push: {
                        history: {
                            price: coin.current_price,
                            volume: coin.total_volume,
                            timestamp: new Date()
                        }
                    }
                },
                { upsert: true, new: true }
            );
        }

        return coins;
    } catch (error) {
        console.error('Error fetching market data:', error.message);
        return [];
    }
};

module.exports = { fetchMarketData };
