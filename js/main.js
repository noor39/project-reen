  $('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay:true,
  autoplayTimeout: 2000,

  responsive:{
  0:{
  items:1
  },
  600:{
  items:2
  },
  1000:{
  items:4
  }
  }
  })
  //****** owl carouwsel end****


//initiating jQuery
  jQuery(function($) {
    $(document).ready( function() {
      //enabling stickUp on the '.navbar-wrapper' class
      $('.navbar-wrapper').stickUp();
    });
  });


  //initiating jQuery
  jQuery(function($) {
    $(document).ready( function() {
      //enabling stickUp on the '.navbar-wrapper' class
      new WOW().init();
    });
  });


// ccounter js countdown js 



  jQuery(function($) {
    $(document).ready( function() {
      //enabling stickUp on the '.navbar-wrapper' class
     
$('.demo').animationCounter({
      start: 10,
      end: 5000,
      delay:10
    });
        $('.you').animationCounter({
      start:0,
      end: 10000,
      delay:10
    });
        $('.btc').animationCounter({
      start: 0,
      end: 5000,
      delay:1
    });
    });
  });





  jQuery(function($) {
    $(document).ready( function() {
      //enabling stickUp on the '.navbar-wrapper' class
     
wow = new WOW(
    {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    WOW().init();
    });
  });
