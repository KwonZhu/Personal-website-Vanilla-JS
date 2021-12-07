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
//Enable Google Maps
window.onload = function () {            
  // LatLng is an Object for longitude and latitude
  let latlng = new google.maps.LatLng(-34.92766, 138.5996);       
  let myOptions = {
    zoom: 11,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP 
  }
  map = new google.maps.Map(document.getElementById("map"), myOptions);
}