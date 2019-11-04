//Responsive iFrame
$('iframe[src*="youtube"]').wrap('<div class="responsiveIframe"/>');

//Slideshow
$('.slideshow .container').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  dots: false,
  infinite: true,
  fade: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:'<button class="prev" title="Previous Slide"><i class="fal fa-chevron-left"></i></button>',
  nextArrow:'<button class="next" title="Next Slide"><i class="fal fa-chevron-right"></i></button>'
});

//Universal Slideshow
$('.carousel .container').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  infinite: true,
  fade: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:'<button class="navBtn prev" title="Previous Slide"><i class="fal fa-chevron-left"></i></button>',
  nextArrow:'<button class="navBtn next" title="Next Slide"><i class="fal fa-chevron-right"></i></button>'
});

$('.slide').each(function(){
    $(this).removeAttr("aria-describedby");
});

//Universal Tables
$('table').wrap( "<div class='universal-table'></div>" );
