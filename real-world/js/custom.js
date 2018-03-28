$(document).ready(function(){
  $('a.menu-link').click(function() {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
  
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top - 90
      }, 1200);
      return false;
    }
  });
})