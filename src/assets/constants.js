const ip = require('ip');
const ipAddr = ip.address();

module.exports = {
    SERVER_URL: "http://" + ipAddr + ":3001",
};