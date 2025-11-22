const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
    symbol: { type: String, required: true, index: true },
    name: { type: String, required: true },
    currentPrice: { type: Number, required: true },
    marketCap: { type: Number },
    totalVolume: { type: Number },
    priceChange24h: { type: Number },
    priceChange1h: { type: Number }, // Calculated or fetched if available
    lastUpdated: { type: Date, default: Date.now },
    history: [
        {
            price: Number,
            volume: Number,
            timestamp: { type: Date, default: Date.now }
        }
    ]
});

module.exports = mongoose.model('Token', TokenSchema);
