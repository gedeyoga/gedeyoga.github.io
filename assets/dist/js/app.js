/**
 *
 * app.js
 *
 */

function readFile(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      // var htmlPreview =
      //   '<img width="200" src="' +
      //   e.target.result +
      //   '" />' +
      //   "<p>" +
      //   input.files[0].name +
      //   "</p>";
        var htmlPreview = `
          <img class="img-fluid" style="object-fit: cover; width: 100%;"
          src="${e.target.result}"
          alt="">
        `;
      var wrapperZone = $(input).parent();
      wrapperZone.css({
        display: 'flex'
      });
      wrapperZone.find('.dropzone-desc').css({
        zIndex: '-1'
      })
      var previewZone = $(input)
        .parent()
        .parent()
        .find(".preview-zone");
      var boxZone = $(input)
        .parent()
        .parent()
        .find(".preview-zone")
        .find(".box")

      wrapperZone.removeClass("dragover");
      wrapperZone.find('img').remove();
      previewZone.removeClass("hidden");
      // boxZone.removeClass('box-body');
      wrapperZone.prepend(htmlPreview);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

function reset(e) {
  e.wrap("<form>")
    .closest("form")
    .get(0)
    .reset();
  e.unwrap();
}

$(".dropzone").change(function() {
  readFile(this);
});

$(".dropzone-wrapper").on("dragover", function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).addClass("dragover");
});

$(".dropzone-wrapper").on("dragleave", function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).removeClass("dragover");
});

$(".remove-preview").on("click", function() {
  var boxZone = $(this)
    .closest(".preview-zone").siblings('.dropzone-wrapper')
    .find(".img-fluid");
  var previewZone = $(this).closest(".preview-zone");
  var dropzone = $(this)
    .closest(".preview-zone").siblings(".dropzone-wrapper")
    .find(".dropzone");
  boxZone.hide('hidden');
  previewZone.addClass("hidden");
  reset(dropzone);
});
