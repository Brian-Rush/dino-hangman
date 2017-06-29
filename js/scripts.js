// var displayWord = require('./../js/scripts-interface.js').displayWordModule;
//business logic stuff for a particular module

function Dino() {
  // this.word;
}

Dino.prototype.dinoPrototype = function(hiddenDisplay) {
  // var splitDinoName = [];
  var toBeSplit = "";
  // var that = this;
  var result;

  $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1').then((responseJSON) => {

    splitWord = responseJSON[0][0].toUpperCase().split("");
    wordUpper = responseJSON[0][0].toUpperCase();
    // var numberOfLetters = this.word.length;
    this.word = splitWord;
    this.wordUpper = wordUpper;

    hiddenDisplay(splitWord);
  });

  // .fail(function(){
  //   failerror();
  // });



};

// Dino.prototype.foo = function(x){
//   this.word = x;
// }

exports.dinoModule = Dino;
