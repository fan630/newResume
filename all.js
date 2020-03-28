$(document).ready(function () {
    $(window).resize(function () {
        wdth = $(window).width();
        if(wdth > 767){
            $('.js-show').addClass('show')
        }
    }); 
});


