const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true, unique: true },
    source: { type: String },
    publishedAt: { type: Date },
    summary: { type: String },
    sentiment: { type: String, enum: ['positive', 'negative', 'neutral'], default: 'neutral' },
    relatedTokens: [{ type: String }] // e.g., ['BTC', 'ETH']
});

module.exports = mongoose.model('Article', ArticleSchema);
