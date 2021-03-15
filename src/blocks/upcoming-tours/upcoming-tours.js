jQuery(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin: 20,
    nav: true,
    dots: false,
    responsive:{
      0: {
        items: 1,
        margin: 0
      },
      480: {
          items: 2
      },
      992: {
          items: 3
      }
    }
  })
});
