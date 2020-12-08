const fetch = require("node-fetch");
const axios = require("axios");

fetch("https://github.com/node-fetch/node-fetch");

axios({ url: "https://github.com/axios/axios" });

console.log("process.version", process.version);
