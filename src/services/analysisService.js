const Token = require('../models/Token');

const analyzeTrends = async () => {
    console.log('Starting Trend Analysis...');
    const tokens = await Token.find({});

    const suspiciousTokens = [];

    for (const token of tokens) {
        // 1. Trend Check: Price UP > 5% in 1 Hour
        const isPriceSurge = token.priceChange1h > 5;

        // 2. Volume Check: Volume UP > 200% (compared to average of history)
        // For simplicity, we'll check if current volume is significantly higher than the last recorded history point if available
        let isVolumeSurge = false;
        if (token.history.length > 1) {
            const lastVolume = token.history[token.history.length - 2].volume; // Previous entry
            if (lastVolume > 0 && token.totalVolume > lastVolume * 3) { // > 200% increase means 3x
                isVolumeSurge = true;
            }
        }

        // 3. Liquidity Check (Market Cap as proxy for now, or real liquidity if API provides)
        const isLowLiquidity = token.marketCap < 500000; // < $500k

        if (isPriceSurge) {
            console.log(`Potential Pump Detected: ${token.symbol} (+${token.priceChange1h}%)`);

            suspiciousTokens.push({
                token,
                reasons: {
                    priceSurge: isPriceSurge,
                    volumeSurge: isVolumeSurge,
                    lowLiquidity: isLowLiquidity
                }
            });
        }
    }

    return suspiciousTokens;
};

module.exports = { analyzeTrends };
