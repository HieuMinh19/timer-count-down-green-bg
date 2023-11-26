var startTimer = function() {
  $('.circle_animation').css({'stroke-dashoffset': 220 });
    $('.circle_animation').stop();
    var time = 30;
    var initialOffset = '0';
    var i = 1;
    $('.circle_animation').animate({'stroke-dashoffset': initialOffset }, 30000);

  };
