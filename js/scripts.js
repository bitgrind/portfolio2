$(function(){

  function animateDown(x) {
    $(x).animate({height:'400px'},300);
    $(x).css('overflow', 'visible');
    $('.projects').show(300);
    $('.past-experience-logo').css('overflow', 'visible');
  }
  function animateUp(x) {
    $(x).animate({'height':'80px'},300);
    $(x).css('overflow', 'hidden');
    $('.past-experience-logo').css('overflow', 'hidden');
    $('.projects').hide(200);
  }
  $('.past-experience').click(function(){
    height = $(this).css('height');
    console.log(height);

    if(height == '80px'){
      console.log('open down');
      animateDown($(this));
    }
    if(height == '400px') {
      console.log('open up');
      animateUp($(this));
    }
  });

});
