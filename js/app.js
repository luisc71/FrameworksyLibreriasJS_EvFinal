$(document).ready(function(){

  $(function cambioColor(){
    $("h1").animate({color: '#dcff0e'}, 1000, function(){
      $("h1").animate({color: '#ffffff'}, 1000, function(){
        cambioColor();
      });
    });
  })

});
