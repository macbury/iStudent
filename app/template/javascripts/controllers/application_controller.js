$(document).ready(function () {
	$('input:submit, button, input[type="button"], .button').button();

	
	$('input:text, textarea, input[type="password"]').addClass("ui-widget-content ui-corner-all");
});

$(document).ajaxSend(function(event, request, settings) { 
	if (typeof(window._token) == "undefined") return;
	
  settings.data = settings.data || "";
  settings.data += (settings.data ? "&" : "") + "authenticity_token=" + encodeURIComponent(window._token);
});
