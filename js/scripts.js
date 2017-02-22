$(function(){

  function animateDown(x) {
    $(x).animate({'height':'400px'},300);
  }
  function animateUp(x) {
    $(x).animate({'height':'80px'},300);
  }
  $('.past-experience').click(function(){
    $('.past-experience').childern
    if(height == '80px'){
      animateDown($(this));
    }
    if(height == '400px') {
      animateUp($(this));
    }
  });

});
