//handlebars
		var mainpageItems = {
			items: [
				// {
				// title: "About",
				// img: 'img/1.jpg',
				// link: '#'
				// },
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
		var theTemplateScript = $("#mainpageItems").html();  
		 var theTemplate = Handlebars.compile(theTemplateScript);  
		$('.horPage').append(theTemplate(mainpageItems));

		var headerItems = {
			title: 'Anastassia Khozissova',
			menuItems: [
				{
					title: 'sample menu item'
				},
				{
					title: 'sample menu item'
				},
				{
					title: 'sample menu item'
				},
				{
					title: 'sample menu item'
				},
				{
					title: 'sample menu item'
				},
				{
					title: 'sample menu item'
				}
			],
			socItems: [
				{
				popup: 'YouTube',
				icon: 'fa-youtube',
				color: '#ff5c5c'
				},
				{
				popup: 'twitter',
				icon: 'fa-twitter',
				color: '#6dadde'
				},
				{
				popup: 'facebook',
				icon: 'fa-facebook-official',
				color: '#4e70ba'
				},
				{
				popup: 'instagram',
				icon: 'fa-instagram',
				color: '#f23d61'
				},
			]
		};
		var headerTemplateScript = $("#headerTemplate").html();  
		 var headerTemplate = Handlebars.compile(headerTemplateScript);  
		$('.horPage').append(headerTemplate(headerItems));
