# Steam ID Checker
It checks all of steam ids that you included in array inside of a file.

## Requirements
- Steam API Key
- Nodejs
- Time

## How to configure?
1. Change API key inside of `config.json`.
2. Insert your wordlist on `./files/wordlist.json`.
3. Start your program with `node index.js`

## Knowledge
* `valid.json` and `invalid.json` is self-exp.
*  Before sending a request to the API, it checks if it checked current ID before. So, if you want to re-check the same ID again; please remove them from `valid` or `invalid` file.

## Why did you do something like that?
I was trying to find myself a three digit ID for my steam profile (spoiler: there is no available three digit ids).

**Enjoy!**
