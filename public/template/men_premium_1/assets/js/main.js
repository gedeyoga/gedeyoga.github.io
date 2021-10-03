$(document).ready(function () {
    // Preloader
    $(".preloader").delay(1000).fadeOut();

    function swiper(swiper, slideDekstop, slideMobile, spaceMarginMobile) {
        var swiper1 = new Swiper(swiper, {
            slidesPerView: slideMobile,
            centeredSlides: false,
            spaceBetween: spaceMarginMobile,
            breakpoints: {
                576: {
                    slidesPerView: slideDekstop,
                    spaceBetween: 15,
                },
            },
        });
    }

    swiper(".swiper1", 4, 3, 8);

    var btnAllLink = $("#btnAllLink");
    var btnKatalog = $("#btnKatalog");

    var allLink = $("#all-link");
    var katalog = $("#katalog");

    btnKatalog.on("click", function () {
        btnAllLink.removeClass("btn-active");
        btnKatalog.addClass("btn-active");

        allLink.removeClass("d-block").addClass("d-none").css("opacity", 0);
        katalog.removeClass("d-none").addClass("d-block").animate({
            opacity: 1,
            transition: "1s ease-in",
        });
        swiper(".swiper2", 3, 2, 10);
        $("#detail-page").removeClass("d-block").addClass("d-none").animate({
            opacity: 0,
            transition: "1s ease-in",
        });
    });

    btnAllLink.on("click", function () {
        btnKatalog.removeClass("btn-active");
        btnAllLink.addClass("btn-active");

        katalog.removeClass("d-block").addClass("d-none").css("opacity", 0);
        allLink.removeClass("d-none").addClass("d-block").animate({
            opacity: 1,
            transition: "1s ease-in",
        });
        $("#detail-page").removeClass("d-block").addClass("d-none").animate({
            opacity: 0,
            transition: "1s ease-in",
        });
    });
});

//Open Detail Page
$(document).on("click", ".detail-produk", function (e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    $("#katalog").removeClass("d-block").addClass("d-none").animate({
        opacity: 0,
        transition: "1s ease-in",
    });
    $("#detail-page").removeClass("d-none").addClass("d-block").animate({
        opacity: 1,
        transition: "1s ease-in",
    });
});
$(document).on("click", "#back", function (e) {
    e.preventDefault();
    $("#detail-page").removeClass("d-block").addClass("d-none").animate({
        opacity: 0,
        transition: "1s ease-in",
    });

    $("#katalog").removeClass("d-none").addClass("d-block").animate({
        opacity: 1,
        transition: "1s ease-in",
    });
});
