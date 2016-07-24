(function() {
  'use strict';
  $('.cheat').on('click', function(e) {
    e.preventDefault();
    $('.cheat').css('z-index', 0);
    $(this).css('z-index', 1);
  })
})();
