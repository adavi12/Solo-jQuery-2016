console.log('JS');

var totalRed = 0;
var totalYellow = 0;
var totalGreen = 0;
var totalBlue= 0;

$( document ).ready( function(){
  $('.color-button').on('click', function(){
    console.log("working");
    var colorButton = $(this).attr("data-color");

  
    if(colorButton === 'red'){
     $('.container').append('<div class = "color-cube red"></div>');
     totalRed++;
     console.log("get total red:", totalRed);
     $('#red').html('Total red :' + totalRed);
    }
    else if(colorButton === 'yellow'){
      $('.container').append('<div class = "color-cube yellow"></div>');
      totalYellow++;
      console.log("get total yellow:", totalYellow);
      $('#yellow').html('Total yellow :' + totalYellow);
     }
     else if(colorButton === 'green'){
       $('.container').append('<div class = "color-cube green"></div>');
       totalGreen++;
       console.log("get total green:", totalGreen);
       $('#green').html('Total green :' + totalGreen);
      }
      else if(colorButton === 'blue'){
        $('.container').append('<div class = "color-cube blue"></div>');
        totalBlue++;
        console.log("get total blue:", totalBlue);
        $('#blue').html('Total blue :' + totalBlue);
       }

    // <div class = 'color-cube red'></div>

    // var $div = $('div/>')appendTo('body');
    // $div.attr('data-color');
    console.log("Get color", colorButton);

    // var counter = $('#red').val();
    // counter++ ;
  });
});


// Append
// $("button").click(function(){
//     $("p").append("<b>Appended text</b>");
// });
//
// var $div = $('<div />').appendTo('body');
// $div.attr('id', 'holdy');
