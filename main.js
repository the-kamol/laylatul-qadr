let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
let main_text = document.getElementById('main-text');
let btn = document.getElementsByClassName('btn');

window.addEventListener('scroll', function () {
	let value = window.scrollY;
	stars.style.left = value * 0.45 + 'px';
	moon.style.top = value * 0.8 + 'px';
	mountains_behind.style.top = value * 0.4 + 'px';
	// mountains_front.style.top = value * 0 + 'px';
	main_text.style.marginRight = value * 1.9 + 'px';
	main_text.style.marginTop = value * 1.1 + 'px';
})


$(document).ready(function() {

	 $(window).on("scroll load", function () {

     if (window.matchMedia('(min-width: 767px)').matches) {
      // ANIMATE
      var first_block = $(".first-block").position();
      if ($(window).scrollTop() >= first_block.top) {
        $(".first-block").addClass("active");
      } else {
        $(".first-block").removeClass("active");
      }

      var second_block = $(".second-block").position();
      if ($(window).scrollTop() >= second_block.top) {
        $(".second-block").addClass("active");
      } else {
        $(".second-block").removeClass("active");
      }
    }


	});



});