(function($){
	$(document).ready(function(){
		var wH, wW, slideSize, bgSize;

		function setSizeVars() {
			wH = $(window).height();
			wW = $(window).width();
			slideSize = wH * 1.5;
			bgSize = wH * 1.01;
			console.log('window width: ' + wW);
			console.log('window height: ' + wH);
			console.log('slide size: ' + slideSize);
			console.log('aspect ratio: ' + wW / wH);
		}

		function setSlidesSize() {
			$('.mainPage-menu__item, .header').each(function(){
				var topOffset = slideSize / 6,
					bgOffset = topOffset - (wH * 0.005);
				$(this).height(slideSize).width(slideSize).css({
					'top': topOffset * -1,
					'background-size' : 'auto ' + bgSize + 'px',
					'background-position' :  'left ' + bgOffset + 'px',

				});
			});
			$('.mainPage-menu__item__title').each(function(){
				$(this).height(slideSize).width(slideSize);
			});
		}
		function bodyFS() {
			var fontSize = wH/35;
			$('body').css('font-size', fontSize  + 'px');
			console.log(fontSize);
		}

		
		//handlebars END
		setSizeVars();
		setSlidesSize();
		bodyFS();

		$(window).on('resize', function () {
			setSizeVars();			
			setSlidesSize();
			bodyFS();
		});

		$('.mainPage-menu__item').hover(function() {
			$(this).toggleClass('hover');
		});

		$('#header').hover(function(){
			$('.mainPage-menu').toggleClass('compact-view');
		});
		// $('.mainPage-menu__item').circlemouse({
		// 	onMouseEnter	: function( el ) {
			
		// 		el.addClass('hover');
			
		// 	},
		// 	onMouseLeave	: function( el ) {
				
		// 		el.removeClass('hover');
				
		// 	},
		// 	onClick			: function( el ) {
				
		// 		alert('clicked');
				
		// 	}
		// });
	});
})(jQuery);