(function($) {
	
    $.fn.linkcues = function(options) {
		var settings = $.extend({
		    filetypes : 'avi,doc,docx,eps,exe,mp3,mp4,mpg,mov,pdf,ppt,pptx,rar,wav,wmv,xls,xlsx,zip',
		    classPrefix : 'linkcues-',
		    windowTarget : '_blank'
		}, options);
	
		var container = $(this);
	
		$('a[href^="http://"],a[href^="https://"],a[href^="ftp://"]', container).each(function() {
		    var site = window.location.protocol + '//' + window.location.hostname;
		    var link = $(this);
		    if(link.attr('href').substr(0, site.length) != site) {
		    	link.addClass(settings.classPrefix + 'external').attr('target', settings.windowTarget);
		    }
		    if(link.attr('href').substr(0, 6) == 'https:') {
		    	link.addClass(settings.classPrefix + 'secure');
		    } else if(link.attr('href').substr(0, 4) == 'ftp:') {
		    	link.addClass(settings.classPrefix + 'ftp').attr('target', settings.windowTarget);
		    }
		});

		$('a[href^="mailto:"]', container).addClass(settings.classPrefix + 'mailto').each(function() {
			var link = $(this);
		    if(link.attr('title') == '') {
		    	link.attr('title', 'send email to ' + link.attr('href').replace('mailto:', '').split('?')[0]);
		    }
		});

		var filetypes = settings.filetypes.split(',');
		for(var i = 0; i < filetypes.length; i++) {
		    $('a[href$=".' + $.trim(filetypes[i]) + '"]', container).addClass(settings.classPrefix + $.trim(filetypes[i])).attr('target', settings.windowTarget);
		}

		$('a[target="' + settings.windowTarget + '"]', container).addClass(settings.classPrefix + 'new-window'); 
		
		return container;
    };
    
})(jQuery);