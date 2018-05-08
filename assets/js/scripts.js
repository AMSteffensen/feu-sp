$(document).ready(function()  {

    /* /*http://imakewebthings.com/waypoints/api/waypoint/*/
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '58px;'
    });


});
