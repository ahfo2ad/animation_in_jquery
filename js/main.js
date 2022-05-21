$(document).ready(function() {

    $('#img1').animate({left: "+=700px", top: "+=300px",  transform: '360' }, {
        step: function(now,fx) {
        $(this).css({
           
            'transform':'rotate('+now+'deg) scale(2)',
        });
    }
    }, 5000);

})