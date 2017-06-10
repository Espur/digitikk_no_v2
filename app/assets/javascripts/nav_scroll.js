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
        $("#hero .icon-bar").css("background-color", "#72b01d");
    } else {
        $( ".nav-img" ).fadeOut;
        $("#hero .icon-bar").css("background-color", "white");
    }
});