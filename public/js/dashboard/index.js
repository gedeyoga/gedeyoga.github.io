function copy_text() {
    var nilai = $("#copyselect").select().val();
    document.execCommand("copy");
    alert(nilai + " berhasil di copy ");
}
$(document).ready(function () {
    function readFileUpload(input, place) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $(place).attr("src", e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#upload-profil").on("change", function () {
        readFileUpload(this, "#img-profil");
        $("#d-hide").remove();
    });
    $("#upload-sampul").on("change", function () {
        readFileUpload(this, "#img-sampul");
        $(".sampul span").remove();
    });
    $(".modalPremium").on("click", function () {
        $("#txt-modal").html($(this).attr("txt-modal"));
        $("#premiumAlert").modal("show");
    });
});
$(document).on("keydown", "#myTabContent .form-control", function (e) {
    if ($(this).attr("jenis-form") != "nama") {
        if (e.keyCode == 32) return false;
    }
});
$(document).on("keyup", "#myTabContent .form-control", function () {
    if ($(this).attr("jenis-form") == "custom-link") {
        let linkInput = $(this).val();
        let linkValue = "";
        if (linkInput.slice(0, 8) == "https://") {
            linkValue = linkInput.replace(linkInput.slice(0, 8), "");
        } else if (linkInput.slice(0, 7) == "http://") {
            linkValue = linkInput.replace(linkInput.slice(0, 7), "");
        } else {
            linkValue = linkInput;
        }
        $(this).val(linkValue);
    } else if ($(this).attr("jenis-form") == "link-youtube") {
        let linkInput = $(this).val();
        let linkValue = "";
        if (
            linkInput.slice(0, 8) != "https://" ||
            linkInput.slice(0, 7) == "http://"
        ) {
            linkInput =
                linkInput == "https:/" || linkInput == "http:/"
                    ? ""
                    : linkInput;
            linkValue = "https://" + linkInput;
        } else {
            linkValue = linkInput;
        }
        $(this).val(linkValue);
    } else if ($(this).attr("jenis-form") == "link-instagram") {
        let linkInput = $(this).val();
        let linkValue = "";
        if (linkInput.slice(0, 26) == "https://www.instagram.com/") {
            linkValue = linkInput.replace(linkInput.slice(0, 26), "");
        } else if (linkInput.slice(0, 22) == "https://instagram.com/") {
            linkValue = linkInput.replace(linkInput.slice(0, 22), "");
        } else if (linkInput.slice(0, 21) == "http://instagram.com/") {
            linkValue = linkInput.replace(linkInput.slice(0, 21), "");
        } else if (linkInput.slice(0, 14) == "instagram.com/") {
            linkValue = linkInput.replace(linkInput.slice(0, 14), "");
        } else {
            linkValue = linkInput;
        }
        $(this).val(linkValue);
    } else if ($(this).attr("jenis-form") == "link-facebook") {
        let linkInput = $(this).val();
        let linkValue = "";
        if (linkInput.slice(0, 25) == "https://www.facebook.com/") {
            linkValue = linkInput.replace(linkInput.slice(0, 25), "");
        } else if (linkInput.slice(0, 21) == "https://facebook.com/") {
            linkValue = linkInput.replace(linkInput.slice(0, 21), "");
        } else if (linkInput.slice(0, 20) == "http://facebook.com/") {
            linkValue = linkInput.replace(linkInput.slice(0, 20), "");
        } else if (linkInput.slice(0, 13) == "facebook.com/") {
            linkValue = linkInput.replace(linkInput.slice(0, 13), "");
        } else {
            linkValue = linkInput;
        }
        $(this).val(linkValue);
    } else if ($(this).attr("jenis-form") == "link-tiktok") {
        let linkInput = $(this).val();
        let linkValue = "";
        if (linkInput.slice(0, 23) == "https://www.tiktok.com/") {
            linkValue = linkInput.replace(linkInput.slice(0, 23), "");
        } else if (linkInput.slice(0, 19) == "https://tiktok.com/") {
            linkValue = linkInput.replace(linkInput.slice(0, 19), "");
        } else if (linkInput.slice(0, 18) == "http://tiktok.com/") {
            linkValue = linkInput.replace(linkInput.slice(0, 18), "");
        } else if (linkInput.slice(0, 11) == "tiktok.com/") {
            linkValue = linkInput.replace(linkInput.slice(0, 11), "");
        } else {
            linkValue = linkInput;
        }
        $(this).val(linkValue);
    } else if ($(this).attr("jenis-form") == "link-shopee") {
        let linkInput = $(this).val();
        let linkValue = "";
        if (linkInput.slice(0, 23) == "https://www.shopee.com/") {
            linkValue = linkInput.replace(linkInput.slice(0, 23), "");
        } else if (linkInput.slice(0, 19) == "https://shopee.com/") {
            linkValue = linkInput.replace(linkInput.slice(0, 19), "");
        } else if (linkInput.slice(0, 18) == "http://shopee.com/") {
            linkValue = linkInput.replace(linkInput.slice(0, 18), "");
        } else if (linkInput.slice(0, 11) == "shopee.com/") {
            linkValue = linkInput.replace(linkInput.slice(0, 11), "");
        } else {
            linkValue = linkInput;
        }
        $(this).val(linkValue);
    } else if ($(this).attr("jenis-form") == "link-bukalapak") {
        let linkInput = $(this).val();
        let linkValue = "";
        if (linkInput.slice(0, 26) == "https://www.bukalapak.com/") {
            linkValue = linkInput.replace(linkInput.slice(0, 26), "");
        } else if (linkInput.slice(0, 22) == "https://bukalapak.com/") {
            linkValue = linkInput.replace(linkInput.slice(0, 22), "");
        } else if (linkInput.slice(0, 21) == "http://bukalapak.com/") {
            linkValue = linkInput.replace(linkInput.slice(0, 21), "");
        } else if (linkInput.slice(0, 14) == "bukalapak.com/") {
            linkValue = linkInput.replace(linkInput.slice(0, 14), "");
        } else {
            linkValue = linkInput;
        }
        $(this).val(linkValue);
    } else if ($(this).attr("jenis-form") == "link-tokopedia") {
        let linkInput = $(this).val();
        let linkValue = "";
        if (linkInput.slice(0, 26) == "https://www.tokopedia.com/") {
            linkValue = linkInput.replace(linkInput.slice(0, 26), "");
        } else if (linkInput.slice(0, 22) == "https://tokopedia.com/") {
            linkValue = linkInput.replace(linkInput.slice(0, 22), "");
        } else if (linkInput.slice(0, 21) == "http://tokopedia.com/") {
            linkValue = linkInput.replace(linkInput.slice(0, 21), "");
        } else if (linkInput.slice(0, 14) == "tokopedia.com/") {
            linkValue = linkInput.replace(linkInput.slice(0, 14), "");
        } else {
            linkValue = linkInput;
        }
        $(this).val(linkValue);
    } else if ($(this).attr("jenis-form") == "link-lazada") {
        let linkInput = $(this).val();
        let linkValue = "";
        if (linkInput.slice(0, 23) == "https://www.lazada.com/") {
            linkValue = linkInput.replace(linkInput.slice(0, 23), "");
        } else if (linkInput.slice(0, 19) == "https://lazada.com/") {
            linkValue = linkInput.replace(linkInput.slice(0, 19), "");
        } else if (linkInput.slice(0, 18) == "http://lazada.com/") {
            linkValue = linkInput.replace(linkInput.slice(0, 18), "");
        } else if (linkInput.slice(0, 11) == "lazada.com/") {
            linkValue = linkInput.replace(linkInput.slice(0, 11), "");
        } else {
            linkValue = linkInput;
        }
        $(this).val(linkValue);
    }
});
$(document).on("click", ".btn-custom-title", function (e) {
    e.preventDefault();
    let titlePreview = $(this).closest(".form-row").find(".title-preview");
    let inputTitle = $(this).closest(".form-row").find(".form-control");
    if (titlePreview.hasClass("d-block")) {
        titlePreview.removeClass("d-block");
        titlePreview.addClass("d-none");
        inputTitle.removeClass("d-none");
        inputTitle.addClass("d-block");
        // $(this).remove('a');
        $(this)
            .closest(".col-2")
            .html(
                '<button class="btn btn-sm btn-grad" style="color: white; height:calc(1.5em + .75rem + 2px)">Ubah</button>'
            );
    } else {
        titlePreview.removeClass("d-none");
        titlePreview.addClass("d-block");
        inputTitle.removeClass("d-block");
        inputTitle.addClass("d-none");
        $(this).attr("href", "");
        $(this).html("Edit");
    }
});
$(document).on("keyup", ".title-form", function () {
    $(this).closest(".form-row").find(".title-preview").html($(this).val());
});
$("#addLink").on("click", function () {
    var html = "";
    html += `<div class="link-group mb-3">
                <div class="form-group">
                    <label style="color: black;">Title</label>
                    <input type="text" name="linkP[]" class="form-control" jenis-form="nama">
                </div>
                <div class="form-group mb-5">
                    <label style="color: black;">Link</label>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">https://</span>
                        </div>
                        <input type="text" class="form-control" name="link[]" placeholder="wibinx.com" jenis-form="custom-link">
                    </div>
                </div>
            </div>`;
    $("#form-website").append(html);

    // if (status_akun != "premium") {
    //     if ($("#form-website .link-group").length == 5) {
    //         $(this).hide();
    //         $("#premiumAlert #txt-modal").html("Custom Link");
    //         $("#premiumAlert").modal("show");
    //     }
    // }
});
// if ($("#form-website .link-group").length == 5) {
//     $(document).ready(function () {
//         $("#addLink").hide();
//     });
// }

//link redirect aktivasi akun
$(document).on("click", ".aktivasi", function () {
    window.location = link + "/akun/aktivasi";
});

function showHari() {
    let cetak = "";
    // if (statusAkun == "premium") {
    // if (sisaHari < 0) {
    //     cetak += `
    //             <p>Paket <span class="text-danger" style="font-weight: 600;">${statusAkun} kamu sudah habis !</span></p>
    //             <a class="btn btn-warning btn-sm mb-4" href="${link}proses/login/paket">Beli Sekarang</a>
    //         `;
    // } else {
    if (status_aktivasi == "request") {
        cetak +=
            "<span>Menunggu persetujuan perpanjangan masa aktif <buttom style='padding:2px; font-size: 11px ;color:white;' class='btn btn-grad aktivasi'> Lihat detail </button></span>";
    } else {
        if (sisaHari <= 3) {
            cetak +=
                "<span>" +
                "Masa aktif akun" +
                ' <span class="text-danger" style="font-weight: 600;"> kamu tersisa lagi ' +
                sisaHari +
                " hari <buttom style='padding:2px; font-size: 11px ;color:white;' class='btn btn-grad aktivasi'> Perpanjang sekarang </button> </span></span>";
        } else {
            cetak +=
                "<span>Masa aktif akun kamu tersisa lagi " +
                sisaHari +
                " hari</span>";
        }
    }
    // }
    // }
    // else{
    //     if(sisaHari == 0){
    //         cetak = '<p>Sisa waktu trialmu <span class="text-danger" style="font-weight: 600;">sudah habis!</span></p>';
    //     }else{
    //         if(sisaHari <= 7){
    //             cetak = '<p>Sisa akun trialmu <span class="text-danger" style="font-weight: 600;">lagi '+sisaHari+' hari</span></p>';
    //         }else{
    //             cetak = '<p>Sisa akun trialmu lagi '+sisaHari+' hari</p>';
    //         }
    //     }
    // }
    let html = cetak;
    $("#tampilhari").append(html);
}
showHari();

$(".remove-preview").on("click", function () {
    let html = `
        <div class="dropzone-desc">
            <div>Upload Gambar</div>
        </div>
    `;
    $(this)
        .closest(".preview-zone")
        .siblings(".dropzone-wrapper")
        .prepend(html);
    let imagePreview = $(this)
        .closest(".preview-zone")
        .siblings(".dropzone-wrapper")
        .find(".img-fluid");
    let csrfToken = $(this).closest("form").find("input[name=_token]").val();
    if (imagePreview.attr("target") == "preview") {
        let getImageName = imagePreview.attr("src").split("/");
        $.ajax({
            url: link + "/deleteImage",
            type: "post",
            dataType: "json",
            data: {
                imageName: getImageName[4],
                _token: csrfToken,
            },
        }).done((response) => {
            toast(response.message);
            imagePreview.removeAttr("target");
        });
        // .done(() => {
        //     let html = `
        //         <div class="dropzone-desc">
        //             <div>Upload Gambar</div>
        //         </div>
        //     `;
        //     $(this)
        //         .closest(".preview-zone")
        //         .siblings(".dropzone-wrapper")
        //         .prepend(html);
        // });
    }
});

function validasiEmail() {
    if (validasiEmailStatus) {
        Swal.fire({
            title: "Perhatian !",
            text: validasiEmailMessage,
            icon: "warning",
            showConfirmButton: true,
            allowOutsideClick: false,
            // showCancelButton: true,
            confirmButtonColor: "#7367f0",
            // cancelButtonColor: "#d33",
            confirmButtonText: "Tambahkan",
            // cancelButtonText: "Nanti",
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.setItem("add_email", true);
                window.location = link + "/profil/setting";
            }
        });
    }
}
validasiEmail();
