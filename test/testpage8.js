$(document).ready(function(){
  $('.btn1').click(function() {
    $( 'nav' ).toggle();
  });
  $('.btn2').click(function(){
    alert("Thanks for visiting my webpage!");
  });
  $('.btn3').click(function(){
    $("#brianpic").fadeOut(2000);
  });
  $(".btn4").click(function(){
    $("#brianpic").fadeIn(2000);
  });
  $(".btn4").mouseover(function(){
    $('.btn4').css("background-color", "#E69400");
  });
  $(".btn4").mouseout(function(){
    $(".btn4").css("background-color", "#D9D9D9");
  });
  $(".btn3").mouseover(function(){
    $(".btn3").css("background-color", "#E69400");
  });
  $(".btn3").mouseout(function(){
    $(".btn3").css("background-color", "#D9D9D9");
  });
  $(".btn2").mouseover(function(){
    $(".btn2").css("background-color", "#E69400");
  });
  $(".btn2").mouseout(function(){
    $(".btn2").css("background-color", "#D9D9D9");
  });
});
