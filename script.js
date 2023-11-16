$(document).ready(function () {
  $(".button").click(function () {
    if ($(this).hasClass("expand")) {
      $("ul").slideUp(function () {
        $(".button").removeClass("expand");
        $(".icon").removeClass("expand");
      });
    } else {
      $(this).addClass("expand");
      setTimeout(function () {
        $(".icon").addClass("expand");
        $("ul").stop().slideDown();
      }, 200);
    }
  });
});
