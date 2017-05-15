$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    var $nav_txt = $(".li-txt");
    var $nav_img = $(".nav-img");
    
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $nav_txt.toggleClass('txt-scroll', $(this).scrollTop() > $nav.height());
    $nav_img.toggleClass('img-scroll', $(this).scrollTop() > $nav.height());
    
  });
});


$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $( ".nav-img" ).fadeIn();
    } else {
        $( ".nav-img" ).fadeOut;
    }
});