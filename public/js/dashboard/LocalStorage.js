$(".active-tabs").on("click", function () {
    var menu = $(this).attr("href");
    localStorage.setItem("active", menu);
});
$(".profil-submit").on("click", function () {
    localStorage.setItem("menu", "profil-form");
});
$(".link-submit").on("click", function () {
    localStorage.setItem("menu", "link-form");
});
$(".katalog-form").on("click", function () {
    localStorage.setItem("menu", "katalog-form");
});

$(document).ready(function () {
    var storageActive = localStorage.getItem("active");
    var storage = localStorage.getItem("menu");
    if (storageActive) {
        $(".active-tabs").attr("href", function (index, value) {
            if (value == storageActive) {
                $(this).click();
            }
        });
        localStorage.removeItem("active");
    }

    if (storage) {
        $("html, body").animate({
            scrollTop: $("." + storage).offset().top - 100,
        });
        localStorage.removeItem("menu");
    }
});

$(document).ready(function () {
    var storageValidasiEmail = localStorage.getItem("add_email");
    if (storageValidasiEmail) {
        var elementAdd =
            "<input type='hidden' name='validasiEmail' value='true'/>";
        $("#form-account-setting").append(elementAdd);
        localStorage.removeItem("add_email");
    }
});
