const fs = require('fs');
const allWords = require('./allList.json');

let lang = {};
let words = {};
Object.keys(allWords).map((w) => {
  Object.keys(allWords[w]).map((l) => {
    lang[l] = true;
  });
});

Object.keys(lang).map((l) => {
  words[l] = {};
  Object.keys(allWords).map((w) => {
    words[l][w] = allWords[w][l];
  });
});

//const create = async () => {

Object.keys(words).map((lg) => {
  if (!fs.existsSync(`./public/locales/${lg}`)) {
    fs.mkdirSync(`./public/locales/${lg}`);
  }
  fs.writeFile(
    `./public/locales/${lg}/translation.json`,
    JSON.stringify(words[lg]),
    (err) => {
      if (err) throw err;
    }
  );
});
//}

//create();
