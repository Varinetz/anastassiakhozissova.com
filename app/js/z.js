(function($){
	$(document).ready(function(){
		var wH, wW, slideSize;

		function setSizeVars() {
			wH = $(window).height();
			wW = $(window).width();
			slideSize = wH*1.5;
			console.log('window width: ' + wW);
			console.log('window height: ' + wH);
			console.log('slide size: ' + slideSize);
			console.log('aspect ratio: ' + wW / wH);
		}

		function setSlidesSize() {
			$('.mainPage-menu__item, .mainPage-title').each(function(){
				var topOffset = slideSize / 6;
				$(this).height(slideSize).width(slideSize).css({
					'top': topOffset * -1,
					'background-size' : 'auto ' + wH + 'px',
					'background-position' :  'left ' + topOffset + 'px',

				});
			});
			$('.mainPage-menu__item__title').each(function(){
				$(this).height(slideSize).width(slideSize);
			});
			$('.mainPage-menu__item__bg').width((wW / 3.7 + slideSize / 2) / 2);
		}
		function bodyFS() {
			var fontSize = wH/35;
			$('body').css('font-size', fontSize  + 'px');
			console.log(fontSize);
		}

		//handlebars
		var theData = {
			title: 'Anastassia Khozissova',
			items: [
				{
				title: "About",
				img: 'img/1.jpg',
				link: '#'
				},
				{
				title: 'Portfolio',
				img: 'img/2.jpg',
				link: '#'
				},
				{
				title: 'Covers',
				img: 'img/3.jpg',
				link: '#'
				},
				{
				title: 'Charity',
				img: 'img/4.jpg',
				link: '#'
				},
				{
				title: 'Projects',
				img: 'img/5.jpg',
				link: '#'
				}
			]
		};
		var theTemplateScript = $("#mainPage").html();  
		 var theTemplate = Handlebars.compile(theTemplateScript);  
		$('.horPage').append(theTemplate(theData));

		//handlebars END
		setSizeVars();
		setSlidesSize();
		bodyFS();

		$(window).on('resize', function () {
			setSizeVars();			
			setSlidesSize();
			bodyFS();
		});

		$('.mainPage-menu__item').mouseenter(function() {
			$(this).addClass('hover');
			$(this).nextAll().addClass('MPSlideToRight');
			$(this).prevAll().addClass('MPSlideToLeft');
		}).mouseleave(function() {
			$('.hover').removeClass('hover');
			$('.MPSlideToLeft').removeClass('MPSlideToLeft');
			$('.MPSlideToRight').removeClass('MPSlideToRight');
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