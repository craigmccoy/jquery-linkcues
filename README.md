*jquery.linkcues.js* is a jQuery plugin that adds CSS classes to links found within the element specified by the selector based on a predetermined set of characteristics.

* link directs the user to a different domain
* link directs the user user to a secure (https) page
* link directs the user user to an ftp site
* link is an email shortcut (mailto)
* link directs the user to a downloadable file (pdf, mp3, etc)
* link opens in a new window (configurable)


## Live Demonstration

Click [here](http://craigmccoy.github.com/jquery-linkcues/ "craigmccoy/jquery-linkcues") to view a live demo.


## Quick Documentation

<code>$(*selector*).linkcues(*options*);</code>

**options:** A set of key/value pairs that configure settings for the plugin.  All options are optional.

* **filetypes:** (type: <a href="http://docs.jquery.com/Types#String" target="_blank">String</a>, default: "pdf") A comma-separated list of file extensions to scan links for.
* **classPrefix:** (type: <a href="http://docs.jquery.com/Types#String" target="_blank">String</a>, default: "linkcues-") This string is prefixed to all classes used by the plugin.
* **windowTarget:** (type: <a href="http://docs.jquery.com/Types#String" target="_blank">String</a>, default: "_blank") This determines what the new window target will be.

## Usage Example

```javascript
$('p').linkcues({
	filetypes : 'pdf,mp3,doc',
	windowTarget : '_new'
});
```
