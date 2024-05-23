

// Animation digitando..
new Typed('.write',{
    strings : ["Hi!", "I'm Raffael", " I'm web developer"],
    typeSpeed : 100,
    delaySpeed : 100,
    loop : true
  });


// Carrosel

  $('.carrosel').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
  }}]
});

// Fim Carrosel






function button_show(){

  let menuMobile = $('.list_menu-mobile');
  let icon = $('.icon');
  
  if(menuMobile.hasClass('open')){
    menuMobile.removeClass('open');
    icon.attr('src', 'imagens/menu.png')
  }else{
    menuMobile.addClass('open');
    icon.attr('src', 'imagens/x.png')
  }



}


// Scroll
$('.menu a[href^="#"]').on('click', function(e) {
  e.preventDefault();
  
  var id = $(this).attr('href'), 
      targetOffset = $(id).offset().top;
  
  $('html, body').animate({ 
    scrollTop: targetOffset - 100
   }, 500);
});