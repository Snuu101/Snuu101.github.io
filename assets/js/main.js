/*
	Directive by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ '481px',   '736px'  ],
			mobilep:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Expand feature1 on click
	document.getElementById("image1").addEventListener("click", function() {
		document.getElementById("feature1").classList.toggle("is-active");
		this.classList.toggle("is-active");
		document.getElementById("content1").classList.toggle("is-active");
		this.classList.toggle("is-active");
	});

	document.getElementById("content1").addEventListener("click", function() {
		document.getElementById("feature1").classList.toggle("is-active");
		this.classList.toggle("is-active");
	});

	// Expand feature2 on click
	document.getElementById("image2").addEventListener("click", function() {
		document.getElementById("feature2").classList.toggle("is-active");
		this.classList.toggle("is-active");
		document.getElementById("content2").classList.toggle("is-active");
		this.classList.toggle("is-active");
	});

	document.getElementById("content2").addEventListener("click", function() {
		document.getElementById("feature2").classList.toggle("is-active");
		this.classList.toggle("is-active");
	});

})(jQuery);