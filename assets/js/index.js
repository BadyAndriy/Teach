
// =======================================================

// =======================================================
$(document).ready(function(){
  $('.header__menu-burger').click(function(){
    $('.header').toggleClass('active')
    $('body').toggleClass('active')
  })
});
// =======================================================
$(document).ready(function(){
    $(".up").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});
// =======================================================

// =======================================================
const todos = JSON.parse(localStorage.getItem("dark-mode"));

if (todos == '1') {
  $('body').toggleClass('dark-mode')
  $('html').toggleClass('dark-mode')
}
function white() {
  localStorage.removeItem("dark-mode", JSON.stringify(1));
  location.reload();
}
function dark() {
  localStorage.setItem("dark-mode", JSON.stringify(1));
  location.reload();
}