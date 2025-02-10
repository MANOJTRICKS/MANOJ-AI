const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
    ALIVE_ING: process.env.ALIVE_ING || "https://cdn.ironman.my.id/i/eaalm1.jpg"
    ALIVE_MSG: process.env.ALIVE_MSG || "MANOJ AI IS ALIVE NOW"

};
