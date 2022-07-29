const axios = require("axios");

const FLAG = "de"; // Flag
const DELAY = 1000; // Delay in ms

async function init() {
    while (true) {
        await new Promise(r => setTimeout(r, DELAY));
        await axios
            .get(`https://ps19.pndsn.com/publish/pub-c-38abacae-d5d5-4071-b0dc-453e6c678795/sub-c-a03f8ca3-3fb7-4253-b871-57852901fb3b/0/flags/0/${encodeURIComponent(`{"emotion":{"flag":"${FLAG}"},"type":2}`)}`);
    }
}

init();