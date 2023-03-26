function toggleSwitch() {
  var toggleBtn = $("#toggle-btn");
  var slider = $(".slider");
  var text = $("h1");
  var input = $('input[type="checkbox"]');
  var body = $("body");

  if (input.prop("checked")) {
    body.addClass("dark-mode");
    text.addClass("dark-mode");
    toggleBtn.addClass("dark-mode");
  } else {
    body.removeClass("dark-mode");
    text.removeClass("dark-mode");
    toggleBtn.removeClass("dark-mode");
  }
}
