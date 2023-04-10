const fs = require('fs');
const req = require('async-request');

let words = JSON.parse(fs.readFileSync('./files/wordlist.json', 'utf-8'));
let static = require('./config.json');

(async () => {
  for (let i = 0; i < words.length; i++) {
    let validWords = JSON.parse(fs.readFileSync('./files/valid.json', 'utf-8'));
    let invalidWords = JSON.parse(fs.readFileSync('./files/invalid.json', 'utf-8'));
        
    let check = validWords.find((el) => el == words[i]) || invalidWords.find((el) => el == words[i]) ? true : false;

    if (!check) {
      console.log(`Currently checking: ${words[i]}`);
      const reqs = await req("https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=" + static.STEAM_API_KEY + "&vanityurl=" + words[i]);
      let info = JSON.parse(reqs.body).response.success;
      
      if (info == 42) {
        console.log(`VALID: ${words[i]}\n`);
        validWords.push(words[i]);
        fs.writeFileSync('./files/valid.json', JSON.stringify(validWords));
      };
      
      if (info == 1) {
        console.log(`INVALID: ${words[i]}\n`);
        invalidWords.push(words[i]);
        fs.writeFileSync('./files/invalid.json', JSON.stringify(invalidWords));
      };

    };
  };
})();