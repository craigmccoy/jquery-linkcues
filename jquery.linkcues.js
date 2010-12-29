(function($) {
    $.fn.linkcues = function(options) {
		var settings = $.extend({
		    filetypes: 'pdf',
		    classPrefix: ''
		}, options);
	
		var container = $(this);
	
		$('a[href^=http://],a[href^=https://],a[href^=ftp://]', container).each(function() {
		    var site = window.location.protocol + '//' + window.location.hostname;
		    if($(this).attr('href').substr(0, site.length) != site) {
		    	$(this).addClass(settings.classPrefix + 'external').attr('target', '_blank');
		    }
		    if($(this).attr('href').substr(0, 6) == 'https:') {
		    	$(this).addClass(settings.classPrefix + 'secure');
		    } else if($(this).attr('href').substr(0, 4) == 'ftp:') {
		    	$(this).addClass(settings.classPrefix + 'ftp').attr('target', '_blank');
		    }
		});

		$('a[href^=mailto:]', container).addClass(settings.classPrefix + 'mailto').each(function() {
		    if($(this).attr('title') == '') {
		    	$(this).attr('title', 'send e-mail to ' + $(this).attr('href').replace('mailto:', '').split('?')[0]);
		    }
		});

		var filetypes = settings.filetypes.split(',');
		for(var i = 0; i < filetypes.length; i++) {
		    $('a[href$=.' + $.trim(filetypes[i]) + ']', container).addClass(settings.classPrefix + $.trim(filetypes[i])).attr('target', '_blank');
		}

		$('a[target=_blank]', container).addClass(settings.classPrefix + 'new-window'); 
    };
})(jQuery);