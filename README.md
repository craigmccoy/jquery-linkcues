jQuery Link Cues Plugin
=========================
This is a jQuery plugin that adds CSS classes to links found within the element specified by the selector based on a predetermined set of characteristics.

* link directs the user to a different domain
* link directs the user user to a secure (https) page
* link directs the user user to an ftp site
* link is an e-mail shortcut (mailto)
* link directs the user to a downloadable file (pdf, mp3, etc)
* link opens in a new window

Quick Documentation
-------------------------
	$(selector).linkcues(options);

Usage Example
-------------------------
	$('#mycontentarea').linkcues({
		filetypes: 'pdf,mp3,doc'
	});