var test = require('tape');
var createMishear = require('../mishear');
var seedrandom = require('seedrandom');
var createProbable = require('probable').createProbable;

var testCases = [
  {
    word: 'pope',
    mishearings: [ 'COPE', 'DOPE', 'PAP', 'PEEP', 'PEP', 'PIP', 'PIPE', 'POKE', 'POLK', 'POOP', 'POP', 'PUP', 'TOPE' ]
    // With metaphones:
    // mishearings: [ 'DOPE', 'COPE', 'TOPE', 'POP', 'POPPY', 'PAP', 'PAPA', 'PAPAW', 'PAPAYA', 'PAPPA', 'PAPUA', 'PUP', 'PUPA', 'PUPPY', 'PIPE', 'PIP', 'PEP', 'PEEP', 'POOP', 'POKE', 'POLK', 'BABA', 'BABE', 'BABU', 'BABY', 'BEEP', 'BIB', 'BOB', 'BOBBY', 'BOOB', 'BOOBY', 'BOP', 'PUB' ]
  },
  {
    word: 'running',
    mishearings: [ 'RAINING', 'REIGNING' ]
    // With metaphones:
    // mishearings:  ['RUINING', 'RAINING', 'REIGNING', 'RENEWING' ]
  },
  {
    word: 'incidents',
    mishearings: []
  },
  {
    word: 'army',
    mishearings: [ 'ARMOR', 'ARMOUR' ]
    // With metaphones:
    // mishearings: [ 'ARMOR', 'ARMOUR', 'ARM', 'AROMA', 'ARUM', 'UREMIA', 'WORM' ]
  },
  {
    word: 'conan',
    mishearings: [ 'BOHNEN', 'CANAN', 'CANNAN', 'COMAN', 'CONNAN', 'CONNON', 'COONAN', 'CUNNANE', 'KANAN', 'KANNAN', 'KANON', 'KEENAN', 'KENAN', 'KENNON', 'KERNAN', 'KERNEN', 'KIENAN', 'KINNAN', 'KIRNAN', 'KOMAN', 'KONEN', 'KUENNEN' ]
    // With metaphones:
    // mishearings: [ 'BOHNEN', 'CONNAN', 'CONNON', 'KANNAN', 'KANAN', 'KANON', 'KONEN', 'CANNAN', 'CANAN', 'CANANEA', 'CANIN', 'CANINO', 'CANION', 'CANNONE', 'CANONIE', 'CUNNANE', 'CUNNEEN', 'KENNON', 'KENAN', 'KENYEN', 'KENYON', 'KERNAN', 'KERNEN', 'KIRNAN', 'KINNAN', 'KINION', 'KINYON', 'KEENAN', 'KIENAN', 'KUENNEN', 'COONAN', 'COMAN', 'KOMAN', 'COENEN', 'GAGNON', 'GANNON', 'GOONAN', 'GUINAN', 'KOEHNEN', 'KOENEN', 'KOHNEN', 'KUNIN', 'QUEENAN', 'QUINON' ]
  },
  {
    word: 'beauty',
    mishearings: [ 'DUTY' ]
    // With metaphones:
    // mishearings: [ 'DUTY', 'BUTT', 'BUTTE', 'BAD', 'BADE', 'BAHT', 'BAIT', 'BAT', 'BAUD', 'BAWD', 'BAWDY', 'BEAD', 'BEAT', 'BED', 'BEDA', 'BEDE', 'BEET', 'BET', 'BETA', 'BID', 'BIDDY', 'BIGHT', 'BIT', 'BITE', 'BOAT', 'BODY', 'BOOT', 'BOOTIE', 'BOOTY', 'BOUT', 'BOXWOOD', 'BUD', 'BUDDHA', 'BUDDY', 'BUYOUT', 'BYTE', 'PAD', 'PADDY', 'PADUA', 'PAIUTE', 'PAT', 'PATE', 'PATIO', 'PATTY', 'PAYDAY', 'PEAT', 'PET', 'PETTY', 'PIETY', 'PIT', 'PITA', 'PITT', 'PITY', 'POD', 'POET', 'POITIER', 'POT', 'POTTY', 'POUT', 'PUT', 'PUTT', 'PUTTY' ]
  },
  {
    word: 'conference',
    mishearings: []
  }
];

var probable = createProbable({
  random: seedrandom('test')
});

var mishear = createMishear({
  probable: probable
});

testCases.forEach(runTest);

function runTest(testCase) {
  test('Mishearing ' + testCase.word, function mishearingTest(t) {
    t.plan(2);

    mishear(testCase.word, checkResults);

    function checkResults(error, words) {
      t.ok(!error, 'No error while mishearing.');
      if (error) {
        console.log(error);
      }
      t.deepEqual(
        words, testCase.mishearings, 'Expected misheard words are passed back.'
      );
    }
  });
}
