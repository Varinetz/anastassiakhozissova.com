!function(i){i(document).ready(function(){function e(){n=i(window).height(),l=i(window).width(),s=1.5*n,console.log("window width: "+l),console.log("window height: "+n),console.log("slide size: "+s),console.log("aspect ratio: "+l/n)}function t(){i(".mainPage-menu__item, .mainPage-title").each(function(){i(this).height(s).width(s).css("top",s/6*-1)}),i(".mainPage-menu__item__title").each(function(){i(this).height(s).width(s)}),i(".mainPage-menu__item__bg").width((l/3.7+s/2)/2)}function o(){var e=n/35;i("body").css("font-size",e+"px"),console.log(e)}var n,l,s,a={title:"Anastassia Khozissova",items:[{title:"About",img:"./img/1.jpg",link:"#"},{title:"Portfolio",img:"./img/2.jpg",link:"#"},{title:"Covers",img:"./img/3.jpg",link:"#"},{title:"Charity",img:"./img/4.jpg",link:"#"},{title:"Projects",img:"./img/5.jpg",link:"#"}]},g=i("#mainPage").html(),m=Handlebars.compile(g);i(".horPage").append(m(a)),e(),t(),o(),i(window).on("resize",function(){e(),t(),o()}),i(".mainPage-menu__item").mouseover(function(){i(this).addClass("hover"),i(this).nextAll().addClass("MPSlideToRight"),i(this).prevAll().addClass("MPSlideToLeft")}).mouseout(function(){i(".hover").removeClass("hover"),i(".MPSlideToLeft").removeClass("MPSlideToLeft"),i(".MPSlideToRight").removeClass("MPSlideToRight")})})}(jQuery);