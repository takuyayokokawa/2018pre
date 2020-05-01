/*!
* jQuery meanMenu v2.0.8
* @Copyright (C) 2012-2014 Chris Wharton @ MeanThemes (https://github.com/meanthemes/meanMenu)
*
*/
(function(a){a.fn.meanmenu=function(c){var d={meanMenuTarget:jQuery(this),meanMenuContainer:"body",meanMenuClose:"X",meanMenuCloseSize:"18px",meanMenuOpen:"<span /><span /><span />",meanRevealPosition:"right",meanRevealPositionDistance:"0",meanRevealColour:"",meanScreenWidth:"480",meanNavPush:"",meanShowChildren:true,meanExpandableChildren:true,meanExpand:"+",meanContract:"-",meanRemoveAttrs:false,onePage:false,meanDisplay:"block",removeElements:""};c=a.extend(d,c);var b=window.innerWidth||document.documentElement.clientWidth;return this.each(function(){var s=c.meanMenuTarget;var f=c.meanMenuContainer;var v=c.meanMenuClose;var z=c.meanMenuCloseSize;var j=c.meanMenuOpen;var g=c.meanRevealPosition;var m=c.meanRevealPositionDistance;var n=c.meanRevealColour;var u=c.meanScreenWidth;var w=c.meanNavPush;var q=".meanmenu-reveal";var l=c.meanShowChildren;var i=c.meanExpandableChildren;var D=c.meanExpand;var E=c.meanContract;var t=c.meanRemoveAttrs;var k=c.onePage;var y=c.meanDisplay;var F=c.removeElements;var x=false;if((navigator.userAgent.match(/iPhone/i))||(navigator.userAgent.match(/iPod/i))||(navigator.userAgent.match(/iPad/i))||(navigator.userAgent.match(/Android/i))||(navigator.userAgent.match(/Blackberry/i))||(navigator.userAgent.match(/Windows Phone/i))){x=true}if((navigator.userAgent.match(/MSIE 8/i))||(navigator.userAgent.match(/MSIE 7/i))){jQuery("html").css("overflow-y","scroll")}var e="";var h=function(){if(g==="center"){var G=window.innerWidth||document.documentElement.clientWidth;var H=((G/2)-22)+"px";e="left:"+H+";right:auto;";if(!x){jQuery(".meanmenu-reveal").css("left",H)}else{jQuery(".meanmenu-reveal").animate({left:H})}}};var p=false;var B=false;if(g==="right"){e="right:"+m+";left:auto;"}if(g==="left"){e="left:"+m+";right:auto;"}h();var r="";var o=function(){if(jQuery(r).is(".meanmenu-reveal.meanclose")){r.html(v)}else{r.html(j)}};var C=function(){jQuery(".mean-bar,.mean-push").remove();jQuery(f).removeClass("mean-container");jQuery(s).css("display",y);p=false;B=false;jQuery(F).removeClass("mean-remove")};var A=function(){var G="background:"+n+";color:"+n+";"+e;if(b<=u){jQuery(F).addClass("mean-remove");B=true;jQuery(f).addClass("mean-container");jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="'+G+'">Show Navigation</a><nav class="mean-nav"></nav></div>');var H=jQuery(s).html();jQuery(".mean-nav").html(H);if(t){jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function(){if(jQuery(this).is(".mean-remove")){jQuery(this).attr("class","mean-remove")}else{jQuery(this).removeAttr("class")}jQuery(this).removeAttr("id")})}jQuery(s).before('<div class="mean-push" />');jQuery(".mean-push").css("margin-top",w);jQuery(s).hide();jQuery(".meanmenu-reveal").show();jQuery(q).html(j);r=jQuery(q);jQuery(".mean-nav ul").hide();if(l){if(i){jQuery(".mean-nav ul ul").each(function(){if(jQuery(this).children().length){jQuery(this,"li:first").parent().append('<a class="mean-expand" href="#" style="font-size: '+z+'">'+D+"</a>")}});jQuery(".mean-expand").on("click",function(I){I.preventDefault();if(jQuery(this).hasClass("mean-clicked")){jQuery(this).text(D);jQuery(this).prev("ul").slideUp(300,function(){})}else{jQuery(this).text(E);jQuery(this).prev("ul").slideDown(300,function(){})}jQuery(this).toggleClass("mean-clicked")})}else{jQuery(".mean-nav ul ul").show()}}else{jQuery(".mean-nav ul ul").hide()}jQuery(".mean-nav ul li").last().addClass("mean-last");r.removeClass("meanclose");jQuery(r).click(function(I){I.preventDefault();if(p===false){r.css("text-align","center");r.css("text-indent","0");r.css("font-size",z);jQuery(".mean-nav ul:first").slideDown();p=true}else{jQuery(".mean-nav ul:first").slideUp();p=false}r.toggleClass("meanclose");o();jQuery(F).addClass("mean-remove")});if(k){jQuery(".mean-nav ul > li > a:first-child").on("click",function(){jQuery(".mean-nav ul:first").slideUp();p=false;jQuery(r).toggleClass("meanclose").html(j)})}}else{C()}};if(!x){jQuery(window).resize(function(){b=window.innerWidth||document.documentElement.clientWidth;if(b>u){C()}else{C()}if(b<=u){A();h()}else{C()}})}jQuery(window).resize(function(){b=window.innerWidth||document.documentElement.clientWidth;if(!x){C();if(b<=u){A();h()}}else{h();if(b<=u){if(B===false){A()}}else{C()}}});A()})}})(jQuery);