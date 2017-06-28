// var ExampleModule = require('./../js/scripts.js').exampleModule;

// BACK END





// FRONT END

$(document).ready(function() {

  var splitDinoName = [];
  // var exampleInstance = new ExampleModule('args');
  $("#start-button").click(function() {

     $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1').then(function(responseJSON){
      console.log(responseJSON);
      var toBeSplit = responseJSON[0][0];
      console.log(toBeSplit);
      splitDinoName = toBeSplit.toUpperCase().split("");
      var numberOfLetters = splitDinoName.length;
      console.log(splitDinoName);
      // for (i=0; i < splitDinoName.length; i++) {
      //   $('#the-word').append("<div class='letter'></div>")
      // }
      for (i=0; i < splitDinoName.length; i++) {
        $('#the-word').append("<div class='letter'><span class=" + splitDinoName[i] + ">" + splitDinoName[i] + "</span></div>")
      }
    }).fail(function(error){
      $('#the-word').text("Sorry! Something's not working. :(")
    });


  });

  $('.letter-button').on("click", function() {
    var clickedLetter = $(this).val()
    console.log(clickedLetter);
    if (splitDinoName.includes(clickedLetter)) {
      console.log($('#the-word span.' + clickedLetter));
      $('#the-word span.' + clickedLetter).css('visibility', 'visible');
    }
  })

  // console.log(exampleInstance.examplePrototype());
});
