var createMishear = require('../mishear');
var seedrandom = require('seedrandom');
var createProbable = require('probable').createProbable;

if (process.argv.length < 3) {
  console.log('Usage: node tools/run-mishear.js <word>');
  process.exit();
}


var probable = createProbable({
  random: seedrandom('test')
});

var mishear = createMishear({
  probable: probable
});

var word = process.argv[2];

mishear(word, logMishearing);

function logMishearing(error, mishearing) {
  if (error) {
    console.log(error);
  }
  console.log(mishearing);
}
