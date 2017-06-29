var Dino = require('./../js/scripts.js').dinoModule;

// To be exported to back end
// var displayWord = function(word){
//   $('#the-word').text("");
//   for (i=0; i < currentDinoName.word.length; i++) {
//     $('#the-word').append("<div class='letter'><span class=" + word[i] + ">" + word[i] + "</span></div>");
//   }
// };

var hiddenDisplay = function(output) {
  $('#the-word').text("");
  console.log(output);
  for (i=0; i < output.length; i++) {
    $('#the-word').append("<div class='letter'><span class=" + output[i] + ">" + output[i] + "</span></div>");
  }
};

// var failError = function() {
//   $('#the-word').text("Sorry! Something's not working.");
// }

// FRONT END

$(document).ready(function() {
  var currentDinoName = new Dino();

  $("#start-button").click(function() {
    $('.congrats').empty();
    $("input#guess").val("");

    currentDinoName.dinoPrototype(hiddenDisplay);
  });


  $('.letter-button').on("click", function() {
    var clickedLetter = $(this).val();
    console.log(clickedLetter);
    if (currentDinoName.word.includes(clickedLetter)) {
      $('#the-word span.' + clickedLetter).css('visibility', 'visible');
    }
  });


  $('.guess').submit(function(event) {
    event.preventDefault();
    $('.congrats').empty();
    var guessedWord = $('#guess').val().toUpperCase();
    // console.log(guessedWord);
    if (guessedWord == currentDinoName.wordUpper) {
      $('span').css('visibility', 'visible');
      $('.congrats').append("Congrats! You saved a dinosaur from some sicko who wants to hang dinosaurs if random people can't guess words!");
    }
  });
});

// exports.displayWordModule = displayWord;
