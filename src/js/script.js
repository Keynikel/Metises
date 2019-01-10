svg4everybody(); // иницализация полифила для IE

$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    arrows: false,
    mobileFirst: true,
    dots: true
  });
});
