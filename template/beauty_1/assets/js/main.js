// Preloader
$(".preloader").delay(1000).fadeOut();

function swiper(swiper , slideDekstop, slideMobile , spaceMarginMobile){
    let swiper1 = new Swiper(swiper, {
        slidesPerView: slideMobile,
        centeredSlides: false,
        spaceBetween: spaceMarginMobile,
        breakpoints: {
            576 : {
                slidesPerView : slideDekstop,
                spaceBetween : 8
            }
        },
    });

    
}

swiper('.swiper1' , 3 , 3 , 8);

var btnAllLink = $('#btnAllLink');
var btnKatalog = $('#btnKatalog');

var allLink = $('#all-link');
var katalog = $('#katalog');


btnKatalog.on('click' , function(){
    btnAllLink.removeClass('btn-active');
    btnKatalog.addClass('btn-active');

    allLink.removeClass('d-block').addClass('d-none').css('opacity' ,0);
    katalog.removeClass('d-none').addClass('d-block').animate({
        opacity: 1,
        transition: '1s ease-in'
    });
    swiper('.swiper2' , 1 , 1 , 20);
    swiper('.swiper3' , 1 , 1 , 20);

    
});

btnAllLink.on('click' , function(){
    btnKatalog.removeClass('btn-active');
    btnAllLink.addClass('btn-active');

    katalog.removeClass('d-block').addClass('d-none').css('opacity' , 0);
    allLink.removeClass('d-none').addClass('d-block').animate({
        opacity: 1,
        transition: '1s ease-in'
    });
});

$(document).ready(function() {
    loading(true, "#wrap");

    setTimeout(() => {
        loading(false, "#wrap");
        $(".detail-page").removeClass('d-none').animate({
            opacity: 1,
            transition: "1s ease-in",
        });
    }, 2000);
})