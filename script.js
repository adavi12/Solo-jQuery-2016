console.log('JS');

var totalRed = 0;
var totalYellow = 0;
var totalGreen = 0;
var totalBlue= 0;
$( document ).ready( function(){
  console.log('JQ');

$( document ).on('click', function(){
  $("div").on("click", function() {
    $(this).attr('data-color');
});




var $div = $("<div>", {id: "red ", "class": "a"});
var $div = $("<div>", {id: "yellow ", "class": "b"});
var $div = $("<div>", {id: "green ", "class": "c"});
var $div = $("<div>", {id: "blue ", "class": "d"});
$div.click(function(){
  if(i > 0){
    //find way to increment color label 
  }
});
$(".color-button").append($div);
// var $el = $('<div/>', { 'data-color':" "});

  // $( "p" ).html( ".attr( 'red' )");
  // $( "p" ).html( ".attr( 'yellow' )");
  // $( "p" ).html( ".attr( 'green' )");
  // $( "p" ).html( ".attr( 'blue' )");
// });
 // if( i > 0){
//
// }
