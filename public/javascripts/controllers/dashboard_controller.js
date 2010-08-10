var dashboard_controller = {
	init: function(){
		$('select').selectmenu({
			style:'dropdown',
			icons: [
				{find: '.file', icon: 'ui-icon-document'},
				{find: '.grade', icon: 'ui-icon-note'},
				{find: '.task', icon: 'ui-icon-pin-s'},
				{find: '.link', icon: 'ui-icon-signal-diag'},
			]
		});

		$('#private-msg').button({
				icons: {
		    	primary: 'ui-icon-locked'
		    },
				text: false
		});

		$('textarea').autogrow({
			lineHeight: 12
		});
	},
}