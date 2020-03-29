$(document).ready(function () {
    $(window).resize(function () {
        wdth = $(window).width();
        if(wdth > 767){
            $('.js-show').addClass('show')
        }
    }); 

    $('.switches').change('click', () => {
        $("body").toggleClass("bg-dark")
        $(".card-header").toggleClass("bg-primary")
        $(".card-header > h5").toggleClass("text-primary-light")
        $(".js-btn").removeClass("btn-primary-light")
        $(".js-btn").addClass("bg-primary")
        // $(".section  p").toggleClass("text_white")
        // $(".section  ul").toggleClass("text_white")
        // $(".section  a").toggleClass("text_blue")
    })
});


