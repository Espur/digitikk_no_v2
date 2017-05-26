$(document).ready(function() {
    
    //PORTFOLIO ANIMATIONS
    
    $('.video').hide();
    
    $('.code-btn').click(function() {
    $('.web').slideToggle();
    $('.video').hide('slow');
    
    });
    
    $('.video-btn').click(function() {
        $('.video').slideToggle();
        $('.web').hide('slow');
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
    });
    
});


