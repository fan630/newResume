$(document).ready(function () {
    $(window).resize(function () {
        wdth = $(window).width();
        if(wdth > 767){
            $('.js-show').addClass('show')
        }
    }); 

    $('.onoffswitch').change('click', () => {
        $("body").toggleClass("bg-dark")
        $(".card-header").toggleClass("bg-primary")
        $(".card-header > h5").toggleClass("text-primary-light")
        $(".js-btn").toggleClass("btn-primary-light")
        $(".js-btn").toggleClass("bg-primary")
        $(".js-btn-link").toggleClass("btn-light")
        $(".js-btn-link").toggleClass("btn-secondary")
        $(".js-btn-demo").toggleClass("btn-primary-light")
        $(".js-btn-demo").toggleClass("btn-primary")
    })
});


