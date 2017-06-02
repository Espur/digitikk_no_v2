$(document).ready(function() {
    
    //PORTFOLIO ANIMATIONS
    
    $('.video').hide();
    $('.photo').hide();
    $('.grafisk').hide();
    $('.cv').hide();
    
    $('.code-btn').click(function() {
    $('.web').slideToggle();
    $('.video, .photo, .grafisk, .cv').hide();
    
    });
    
    $('.video-btn').click(function() {
        $('.video').slideToggle();
        $('.web, .photo, .grafisk, .cv').hide();
    });
    
    $('.camera-btn').click(function() {
        $('.photo').slideToggle();
        $('.web, .video, .grafisk, .cv').hide();
    });
    
    $('.pencil-btn').click(function() {
        $('.grafisk').slideToggle();
        $('.web, .video, .photo, .cv').hide();
    });
    
    $('.cv-btn').click(function() {
        $('.cv').slideToggle();
        $('.web, .video, .photo, .grafisk').hide();
    });
    
    
    //ORDERS ANIMATIONS
    
    $('#grafisk-orders, #video-orders, #annet-orders').hide();
    
    $('.grafisk-tab').click(function() {
        $('.grafisk-tab').addClass('active');
        $('.web-tab, .video-tab, .annet-tab').removeClass('active')
        $('#grafisk-orders').toggle();
        $('#web-orders, #video-orders, #annet-orders').hide();
    });
    
    $('.video-tab').click(function() {
        $('.video-tab').addClass('active');
        $('.web-tab, .grafisk-tab, .annet-tab').removeClass('active');
        $('#video-orders').toggle();
        $('#web-orders, #grafisk-orders, #annet-orders').hide();
    });
    
    $('.web-tab').click(function() {
        $('.web-tab').addClass('active');
        $('.grafisk-tab, .video-tab, .annet-tab').removeClass('active');
        $('#web-orders').toggle();
        $('#grafisk-orders, #video-orders, #annet-orders').hide();
    });
    
    $('.annet-tab').click(function() {
        $('.annet-tab').addClass('active');
        $('.web-tab, grafisk-tab, video-tab').removeClass('active');
        $('#annet-orders').toggle();
        $('#web-orders, #grafisk-orders, #video-orders').hide();
    });
    
    
    
    // SCROLL SECTION ANIMATIONS
    
    $('#nav-about').click(function() {
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 1500);
    });
    
    $('#nav-services').click(function() {
        $('html, body').animate({
            scrollTop: $('#services').offset().top
        }, 1500);
    });
    
    $('#nav-portfolio').click(function() {
        $('html, body').animate({
            scrollTop: $('#portfolio').offset().top
        }, 1500);
    });
    
    $('#nav-contact').click(function() {
        $('html, body').animate({
            scrollTop: $('#contact').offset().top
        }, 1500);
    });
    
    $('.nav-img').click(function() {
        $('html, body').animate({
            scrollTop: $('#hero').offset().top
        }, 1500);
    });
    
    $('.hero-btn').click(function() {
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 1500);
    });
    
});


