$(document).ready(function () {
	window._csrf_token = $('meta[name=csrf-token]').attr('content');
  window._csrf_param = $('meta[name=csrf-param]').attr('content');

	$('input:submit, button, input[type="button"], .button').button();

	
	$('input:text, textarea, input[type="password"]').addClass("ui-widget-content ui-corner-all");
	
	$('select').selectmenu({
		style:'dropdown'
	});
});

$(document).ajaxSend(function(event, request, settings) { 
	if (typeof(window._token) == "undefined") return;
	
  settings.data = settings.data || "";
  settings.data += (settings.data ? "&" : "") + encodeURIComponent( window._csrf_param) + "=" + encodeURIComponent(window._csrf_token);
});
