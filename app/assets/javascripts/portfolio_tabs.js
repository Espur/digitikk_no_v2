$(document).ready(function() {
    $('.video').hide();
    
    $('.code-btn').click(function() {
    $('.web').slideToggle();
    $('.video').hide();
    
    });
    
    $('.video-btn').click(function() {
        $('.video').slideToggle();
        $('.web').hide();
    });
    
});


