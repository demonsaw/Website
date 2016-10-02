function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function isDownloadButtonLink()
{
    switch(location.hash)
    {
        case 'raspbian':
        case 'ubuntu':
        case 'windows':
        case 'osx':
        case 'debian':
		case 'android':
            return true;
    }
    return false;
}

function isDirectLink()
{
    switch(location.hash)
    {
        case 'about':
        case 'help':
        case 'feedback':
        case 'download':
            return true;
    }
    return false;
}

(function($){
	$(function(){

		// collapse active class on icons
		$(".collapse").collapse({ toggle: false })
		$(".navbar-header a.icon").click(function() {
			$(this).toggleClass("active");
			$(this).siblings("a.icon").each(function() {
				$(this).removeClass("active");
				var target = $(this).data("target");
				$(target).collapse("hide");
			})
		});

		// MixItUp Grid
		if (getParameterByName('dl') == '1' || isDownloadButtonLink()){
			$(function(){
				$('.gallery').mixitup({
					easing: 'snap',
					showOnLoad: 'download',
					resizeContainer: false,
					onMixEnd: function(state)
		      {
						if (window.location.hash.length > 3){
							window.location.href=window.location.hash;
						}
		      }
				});
			});
		}
		else
        {
            if (isDirectLink())
            {
                $(function()
                {
                    $('.gallery').mixitup
                    ({
                        easing: 'snap',
                        showOnLoad: location.hash,
                        resizeContainer: false,
												onMixEnd: function(state)
									      {
													if (window.location.hash.length > 3){
									        	window.location.href=window.location.hash;
													}
									      }
                    });
                });
            }
            else
            {
                $(function()
                {
                    $('.gallery').mixitup({
                        easing: 'snap',
                        showOnLoad: 'demonsaw',
                        resizeContainer: false,
												onMixEnd: function(state)
									      {
													if (window.location.hash.length > 3){
									        	window.location.href=window.location.hash;
													}
									      }
                    });
                });
            }
		}

		// client tab init
		$(document).off('click.tab.data-api');
		$('a.tab').hover(function () { $(this).tab('show'); });

		// Dynamic positioning of dropdown menus (CSS Arrow)
		$(".arrow-up").each(function() {
			var hash = "#" + $(this).parent().attr("id");
			var icon = $("a.icon[data-target='" + hash + "']");
			var left = icon.children("i").first().position().left;
			var offset = icon.parent().width() - left - icon.children("i").first().width();
			$(this).css("margin-right", offset);
		});

		// Tooltip init
		$(".social-media a").tooltip();

		// Small Navbar closes Open toggle menus
		$("ul.nav li a[href^='#']").click(function () {
			$(".navbar-collapse.in").collapse('hide');
		});

		// Collapsible Active Toggling
		$("a[data-toggle='collapse']").click(function() {
			$(this).parent().parent(".panel-heading").toggleClass("active");
		});

	});
})(jQuery);

/*Some magical stuff here gives you the current demonsaw version from an XML file*/
var request = new XMLHttpRequest();
request.open("GET", "version.xml", false);
request.send();
var xml = request.responseXML;
var gloVers = xml.getElementsByTagName("gloversion")[0].innerHTML;
var winVers = xml.getElementsByTagName("winversion")[0].innerHTML;
var ubuVers = xml.getElementsByTagName("ubuversion")[0].innerHTML;
var nixVers = xml.getElementsByTagName("nixversion")[0].innerHTML;
var debVers = xml.getElementsByTagName("debversion")[0].innerHTML;
var osxVers = xml.getElementsByTagName("osxversion")[0].innerHTML;
var rpiVers = xml.getElementsByTagName("rpiversion")[0].innerHTML;
var andVers = xml.getElementsByTagName("andversion")[0].innerHTML;
var winLegacy = xml.getElementsByTagName("winlegacy")[0].innerHTML;
var debLegacy = xml.getElementsByTagName("deblegacy")[0].innerHTML;
var ubuLegacy = xml.getElementsByTagName("ubulegacy")[0].innerHTML;
var rpiLegacy = xml.getElementsByTagName("rpilegacy")[0].innerHTML;
var andLegacy = xml.getElementsByTagName("andlegacy")[0].innerHTML;
for (var i = 0; i < document.getElementsByClassName("winVersion").length; i++){
	document.getElementsByClassName("winVersion")[i].innerHTML = winVers;
}
for (var i = 0; i < document.getElementsByClassName("nixVersion").length; i++){
	document.getElementsByClassName("nixVersion")[i].innerHTML = nixVers;
}
for (var i = 0; i < document.getElementsByClassName("ubuVersion").length; i++){
	document.getElementsByClassName("ubuVersion")[i].innerHTML = ubuVers;
}
for (var i = 0; i < document.getElementsByClassName("debVersion").length; i++){
	document.getElementsByClassName("debVersion")[i].innerHTML = debVers;
}
for (var i = 0; i < document.getElementsByClassName("osxVersion").length; i++){
	document.getElementsByClassName("osxVersion")[i].innerHTML = osxVers;
}
for (var i = 0; i < document.getElementsByClassName("rpiVersion").length; i++){
	document.getElementsByClassName("rpiVersion")[i].innerHTML = rpiVers;
}
for (var i = 0; i < document.getElementsByClassName("andVersion").length; i++){
	document.getElementsByClassName("andVersion")[i].innerHTML = andVers;
}
for (var i = 0; i < document.getElementsByClassName("winLegacy").length; i++){
	document.getElementsByClassName("winLegacy")[i].innerHTML = winLegacy;
}
for (var i = 0; i < document.getElementsByClassName("ubuLegacy").length; i++){
	document.getElementsByClassName("ubuLegacy")[i].innerHTML = ubuLegacy;
}
for (var i = 0; i < document.getElementsByClassName("debLegacy").length; i++){
	document.getElementsByClassName("debLegacy")[i].innerHTML = debLegacy;
}
for (var i = 0; i < document.getElementsByClassName("osxLegacy").length; i++){
	document.getElementsByClassName("osxLegacy")[i].innerHTML = osxLegacy;
}
for (var i = 0; i < document.getElementsByClassName("rpiLegacy").length; i++){
	document.getElementsByClassName("rpiLegacy")[i].innerHTML = rpiLegacy;
}
for (var i = 0; i < document.getElementsByClassName("andLegacy").length; i++){
	document.getElementsByClassName("andLegacy")[i].innerHTML = andLegacy;
}
for (var i = 0; i < document.getElementsByClassName("gloVersion").length; i++){
	document.getElementsByClassName("gloVersion")[i].innerHTML = gloVers;
}