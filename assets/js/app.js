$(function(){$(".pl-sub-pattern-markup").each(function(){$(this).before('<div class="pl-sub-pattern-sample"><div class="pl-sub-pattern-sample-toggle-controls"><span class="show">&#43; Show</span><span class="hide">&#45; Hide</span> HTML</div><div class="pl-sub-pattern-sample-toggle-target"><textarea>'+$(this).html()+"</textarea></div></div>")}),$(".pl-sub-pattern").on("click",".pl-sub-pattern-sample-toggle-controls",function(){$(this).parent(".pl-sub-pattern-sample").toggleClass("visible")})});
$(".filter-button-js").click(function(){$(this).toggleClass("open"),$(".tabs-menu-list").hasClass("open")&&($(".tabs-menu-button-js").toggleClass("open"),$(".tabs-menu-list").removeClass("open")),$(this).parent().siblings(".filters-container").toggleClass("open")}),$(".filters-container a").click(function(t){t.preventDefault()}),$(".filters-container .tabs .tabs-menu ul li").click(function(){var t=$(this).find("a").attr("href");$(this).closest(".tabs").find("div.tab-content.active").removeClass("active"),$(t).addClass("active")});

$(function(){$(".remove-rtl").click(function(){return $("body").removeClass("rtl"),!1})}),$(function(){$(".add-rtl").click(function(){return $("body").addClass("rtl"),!1})});
function setActiveStyleSheet(e){var t,i;for(t=0;i=document.getElementsByTagName("link")[t];t++)-1!=i.getAttribute("rel").indexOf("style")&&i.getAttribute("title")&&(i.disabled=!0,i.getAttribute("title")==e&&(i.disabled=!1))}function getActiveStyleSheet(){var e,t;for(e=0;t=document.getElementsByTagName("link")[e];e++)if(-1!=t.getAttribute("rel").indexOf("style")&&t.getAttribute("title")&&!t.disabled)return t.getAttribute("title");return null}function getPreferredStyleSheet(){var e,t;for(e=0;t=document.getElementsByTagName("link")[e];e++)if(-1!=t.getAttribute("rel").indexOf("style")&&-1==t.getAttribute("rel").indexOf("alt")&&t.getAttribute("title"))return t.getAttribute("title");return null}function createCookie(e,t,i){if(i){var r=new Date;r.setTime(r.getTime()+24*i*60*60*1e3);var n="; expires="+r.toGMTString()}else n="";document.cookie=e+"="+t+n+"; path=/"}function readCookie(e){for(var t=e+"=",i=document.cookie.split(";"),r=0;r<i.length;r++){for(var n=i[r];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(t))return n.substring(t.length,n.length)}return null}window.onload=function(){var e=readCookie("style"),t=e?e:getPreferredStyleSheet();setActiveStyleSheet(t)},window.onunload=function(){var e=getActiveStyleSheet();createCookie("style",e,365)};var cookie=readCookie("style"),title=cookie?cookie:getPreferredStyleSheet();setActiveStyleSheet(title);
$(window).scroll(function(){var l=$(window).scrollTop();l>=130?($(".pl-jump-nav").addClass("pl-fixed"),$(".pl").addClass("sticky-nav")):($(".pl-jump-nav").removeClass("pl-fixed"),$(".pl").removeClass("sticky-nav"))});
$(".tabs-menu ul li").click(function(){$(this).parent().find("li.active").removeClass("active"),$(this).addClass("active")}),$(".tabs-menu-button-js").click(function(){$(this).toggleClass("open"),$(".filters-container").hasClass("open")&&($(".filter-button-js").toggleClass("open"),$(".filters-container").removeClass("open")),$(this).siblings(".tabs-menu-list").toggleClass("open")}),$("ul.tabs-menu-list li").click(function(){$(this).parent().prev("#tabs-menu-selection").html($(this).text()),$(this).parent().toggleClass("open"),$(this).parent().siblings(".tabs-menu-button-js").toggleClass("open")});