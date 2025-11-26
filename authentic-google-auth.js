require('dotenv').config();

const googleAuth = {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
};

module.exports = googleAuth;
