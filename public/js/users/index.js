$(document).ready(function () {
    loadList(link + `/admin/listDataUser?search=&filter=`);
});

function loadList(route) {
    $("#loadUsers").html("");
    $.getJSON(route, function (response) {
        let dataPaging = {
            next: response.links.next,
            prev: response.links.prev,
            current: response.meta.current_page,
        };
        pagination(dataPaging);
        let html = "";
        $.each(response.data, function (index, value) {
            html += `
            <tr>
                <td>${value.id_user}</td>
                <td>${value.user_link_redirect}</td>
                <td>${
                    value.nama_user == null ? "Belum Diisi" : value.nama_user
                }</td>
                <td>${value.tanggal_akhir_berlangganan}</td>
                <td>${translate(value.status_berlangganan)} ${
                value.status_berlangganan == "request"
                    ? "<spam onclick=\"detailRequest('" +
                      value.id_user +
                      '\')" class="btn btn-grad text-white" style="padding: 0px;font-size: 9px;cursor:pointer" data-toggle="modal" data-target="#detailRequest">konfirmasi</span>'
                    : ""
            }</td>
                <td>
                    <button onclick="edit('${
                        value.id_user
                    }')" type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#edit">
                    <i class="fas fa-pencil-alt"></i>
                    </button>
                    <button onclick="hapus('${
                        value.id_user
                    }')" type="button" class="btn btn-danger btn-sm">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>`;
        });

        $("#loadUsers").append(html);
    });
}

function pagination(data) {
    let html = "";
    $("#pagination").html("");
    html += `
        <ul class="pagination justify-content-center">
            <li class="page-item ${data.prev == null ? "disabled" : ""}">
                <a class="page-link" href="javascript:void(0)" onclick="prev('${
                    data.prev
                }')" >Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">${
                data.current
            }</a></li>
            <li class="page-item ${data.next == null ? "disabled" : ""}">
                <a class="page-link" href="javascript:void(0)" onclick="next('${
                    data.next
                }')"
                ${
                    data.next == null
                        ? 'tabindex="-1" aria-disabled="true"'
                        : ""
                }>Next</a>
            </li>
        </ul>
    `;
    $("#pagination").html(html);
}

function next(link) {
    let value = $("#search-users").val();
    let value2 = $("#filter-status").val();
    loadList(link + `&search=${value}&filter=${value2}`);
}
function prev(link) {
    let value = $("#search-users").val();
    let value2 = $("#filter-status").val();
    loadList(link + `&search=${value}&filter=${value2}`);
}

function translate(value) {
    var result = " - ";
    switch (value) {
        case "konfirmasi":
            result = "Sudah berlangganan";
            break;
        case "belum aktivasi":
            result = "Belum aktivasi";
            break;
        case "request":
            result = "Menunggu konfirmasi";
            break;
        case "tidak diaktivasi":
            result = "Permintaan ditolak";
            break;
        case "blokir":
            result = "Diblokir";
            break;
        default:
            result = "Belum aktivasi";
            break;
    }

    return result;
}

function hapus(id) {
    swal(
        "Apakah kamu yakin ?",
        "menghapus user dengn ID user " + id,
        function () {
            $.post(
                link + "/admin/listDataUser/hapus",
                {
                    id_user: id,
                    _token: $('meta[name="csrf-token"]').attr("content"),
                },
                function (response) {
                    response = JSON.parse(response);
                    toast(response.message);
                    loadList(link + `&search=${value}&filter=${value2}`);
                }
            );
        }
    );
}

function search() {
    let value = $("#search-users").val();
    let value2 = $("#filter-status").val();
    loadList(
        link + "/admin/listDataUser?search=" + value + "&filter=" + value2
    );
}

$(document).keyup(function (e) {
    const KeyupEnter = $("#search-users:focus").length;
    if (KeyupEnter != 0 && e.keyCode === 13) {
        search();
    }
});
