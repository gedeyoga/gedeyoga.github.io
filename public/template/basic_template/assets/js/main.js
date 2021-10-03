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

    swiper(".swiper1", 3, 3, 8);

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
        swiper(".swiper2", 1, 1, 20);
        swiper(".swiper3", 1, 1, 20);
    });

    btnAllLink.on("click", function () {
        btnKatalog.removeClass("btn-active");
        btnAllLink.addClass("btn-active");

        katalog.removeClass("d-block").addClass("d-none").css("opacity", 0);
        allLink.removeClass("d-none").addClass("d-block").animate({
            opacity: 1,
            transition: "1s ease-in",
        });
    });
});

$(document).ready(() => {
    setTimeout(() => {
        $(document).find(".ph").removeClass(".ph");
    }, 2000);

    loading(true, "#wrap");

    setTimeout(() => {
        loading(false, "#wrap");
        $(".detail-page").removeClass('d-none').animate({
            opacity: 1,
            transition: "1s ease-in",
        });
    }, 2000);
});

//Detail Page

let detailpage = $(".detail-page");
let homepage = $(".home-page");

// $(document).on('click' , '.home-page .goto-detail' , function(e){
//     e.preventDefault();

//     homepage.removeClass('d-block').addClass('d-none').css('opacity' , 0);
//     detailpage.removeClass('d-none').addClass('d-block').animate({
//         opacity: 1,
//         transition: '1s ease-in'
//     });
//     loading(true , 'detail-page');

//     setTimeout(() => {
//         loading(false , 'detail-page');
//     } , 2000)
// });

// $(document).on("click", ".detail-page .button-back", function (e) {
//     e.preventDefault();

//     detailpage.removeClass("d-block").addClass("d-none").css("opacity", 0);
//     homepage.removeClass("d-none").addClass("d-block").animate({
//         opacity: 1,
//         transition: "1s ease-in",
//     });
// });

function gotoDetail(nama, deskripsi, foto, harga, kontak, type) {
    homepage.removeClass("d-block").addClass("d-none").css("opacity", 0);
    detailpage.removeClass("d-none").addClass("d-block").animate({
        opacity: 1,
        transition: "1s ease-in",
    });
    let message = `${kontak}&text=Halo Kak, Apakah ready ${nama}nya?. Pesan dikirim melalui Wibinx.`;
    let html = `
        <div class="item-image">
            <img src="../../assets/image/user_image/${foto}" alt="sampul">
            <div class="button-back">
                <a id="backto-all-link">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5795 14.7994C6.90733 15.1493 7.435 15.145 7.758 14.7899C8.081 14.4347 8.07708 13.8632 7.74925 13.5132L3.27397 8.73622H14.6666C15.1268 8.73622 15.4999 8.33204 15.4999 7.83344C15.4999 7.33493 15.1268 6.93066 14.6666 6.93066H3.27947L7.74925 2.15962C8.07708 1.80968 8.081 1.23809 7.758 0.882935C7.435 0.527773 6.90733 0.523539 6.5795 0.873483L0.809348 7.03259C0.395256 7.47459 0.395256 8.19825 0.809348 8.64025L6.5795 14.7994Z" fill="white"/>
                    </svg>
                </a>
            </div>
        </div>
        <div class="content detail px-4">
            <div class="information">
                <h2>${nama}</h2>
                <span><i>${type}</i></span>
                <p>${deskripsi}</p>
            </div>
            <div class="pricing">
                <div class="preview">
                    <label>
                        <span class="currency">Rp</span>
                        <span class="nominal">${harga}</span>
                    </label>
                </div>'
                <div class='d-flex'>
                    <a target="_blank" class="btn-whatsapp" href="${message}">
                        <i class="fab fa-whatsapp"></i>
                        <span>Tanya Whatsapp</span>
                    </a>
                </div>
            </div>
        </div>
    `;
    loading(true, "detail-page");

    setTimeout(() => {
        loading(false, "detail-page");
        $("#detail-produk").html(html);
    }, 2000);
}

$("#backto-all-link").on("click", function () {
    $("#detail-produk").html(``);
    homepage.removeClass("d-none").addClass("d-block").css("opacity", 1);
    detailpage.removeClass("d-block").addClass("d-none").css("opacity", 1);
});
