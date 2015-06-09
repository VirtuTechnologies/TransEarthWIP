var markup = document;
if (markup.addEventListener){
  markup.addEventListener("DOMContentLoaded", function(event) {
    var isVisible = false;
    $('#goTopBtn').click(function(){
        $('html,body').animate({scrollTop: 0}, 500);
    });
    $(window).scroll(function(){
         var shouldBeVisible = $(window).scrollTop()>200;
         if (shouldBeVisible && !isVisible) {
              isVisible = true;
              $('#goTopBtn').show();
         } else if (isVisible && !shouldBeVisible) {
              isVisible = false;
              $('#goTopBtn').hide();
        }
    });
  });
}
else if (markup.attachEvent){
  markup.attachEvent($(function(event) {
    var isVisible = false;
    $('#goTopBtn').click(function(){
        $('html,body').animate({scrollTop: 0}, 500);
    });
    $(window).scroll(function(){
         var shouldBeVisible = $(window).scrollTop()>200;
         if (shouldBeVisible && !isVisible) {
              isVisible = true;
              $('#goTopBtn').show();
         } else if (isVisible && !shouldBeVisible) {
              isVisible = false;
              $('#goTopBtn').hide();
        }
    });
  }));
}