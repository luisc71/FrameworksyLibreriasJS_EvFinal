function colorUno(){
  $("h1").animate({color: '#dcff0e'}, 1000, function(){
    colorDos();
  });
};
function colorDos(){
  $("h1").animate({color: '#ffffff'}, 1000, function(){
    colorUno();
  });
};

$(document).ready(function(){
  colorUno();
  colorDos();
});
