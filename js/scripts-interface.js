// var ExampleModule = require('./../js/scripts.js').exampleModule;

// BACK END





// FRONT END

$(document).ready(function() {
  // var exampleInstance = new ExampleModule('args');
  $("#start-button").click(function() {

    var dinoName = $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1', function(responseJSON){
      console.log(responseJSON);      
    });
    console.log(dinoName);
  });


  // console.log(exampleInstance.examplePrototype());
});
