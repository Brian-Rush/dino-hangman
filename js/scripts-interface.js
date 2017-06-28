// var ExampleModule = require('./../js/scripts.js').exampleModule;

// BACK END





// FRONT END

$(document).ready(function() {
  // var exampleInstance = new ExampleModule('args');
  $("#start-button").click(function() {

    var dinoName = $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1').then(function(responseJSON){
      console.log(responseJSON);
      var toBeSplit = responseJSON[0][0];
      console.log(toBeSplit);
      // var dinoLetters = [];
      var splitDinoName = toBeSplit.split("");
      console.log(splitDinoName);
      // console.log(typeof(responseJSON[0]));
      // dinoLetters.push(splitDinoName);
      // console.log(dinoLetters);
    }).fail(function(error){
      $('#the-word').text("Sorry! Something's not working. :(")
    });
    // console.log(dinoName);
    // console.log(dinoName);
  });


  // console.log(exampleInstance.examplePrototype());
});
