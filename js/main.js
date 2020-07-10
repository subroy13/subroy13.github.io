$(document).ready(function(){
    
    // scrolling function
    $(window).scroll(function(){
        var scrollHeight = $(window).scrollTop();

        if (scrollHeight > 20) {
            // create scrolltop button
        } else {
            // dont display scrolltop button     
        }
    
    });

    // custom class addition of aesthetics
    $('table').addClass('table table-bordered table-responsive');

})