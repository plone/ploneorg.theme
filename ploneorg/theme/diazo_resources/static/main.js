/*! */
/*! Ploneorg.theme */
require(["jquery","++theme++ploneorg/static/bootstrap","++theme++ploneorg/static/featherlight"],function(a){a(function(){"use strict";function b(){var b=a(".footer-doormat").outerHeight()+a(".footer-legal").outerHeight();a("body").css("padding-bottom",b),a("footer").css("height",b)}a(".btn-search").click(function(){a(".sec-search").slideToggle("fast",function(){a("#search").focus()})});var c=a("p.truncate");a.each(c,function(b,c){var d,e,f,g,h=0,i=1;if(d=c.textContent.split(/\s+/),a(c).height()>75){for(;75>h;)g=f,f=e,e=c.textContent=d.slice(0,i).join(" "),h=a(c).height(),i++;c.textContent=g+" ..."}}),a(document).ready(function(){a(".dropdown-toggle").dropdown()}),a(document).ready(function(){b()}),a(window).resize(function(){b()})})});