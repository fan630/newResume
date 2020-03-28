$(document).ready(function () {
    
    $(window).resize(function () {
        wdth = $(window).width();
        if(wdth > 767){
            $('.js-show').addClass('show')
        }
    }); 



});


$('#mySwitch').on('switch-change', function (e, data) {
    var $el = $(data.el)
        , value = data.value;
    console.log(e, $el, value);
});

