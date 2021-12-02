//jQuery hide() and show()
$(document).ready(function() {
  $(".resume__page").hide();
  $(".services__page").hide();
  $(".contact__page").hide();
  //click home
  $(".tab__home").click(function(){
    $(".home__page").show();
    $(".resume__page").hide();
    $(".services__page").hide();
    $(".contact__page").hide();
  });
  //click resume
  $(".tab__resume").click(function(){
    $(".resume__page").show();
    $(".home__page").hide();
    $(".services__page").hide();
    $(".contact__page").hide();
  });
  //click services
  $(".tab__services").click(function(){
    $(".services__page").show();
    $(".home__page").hide();
    $(".resume__page").hide();
    $(".contact__page").hide();
  });
  //click contact
  $(".tab__contact").click(function(){
   $(".contact__page").show();
   $(".home__page").hide();
   $(".resume__page").hide();
   $(".services__page").hide();
  });
});