/*		
 * progress.js
 * Copyright (c) 2014 yuch4n
 * Released under the MIT license.
 * version: 0.01 
 * update : 2014/06/08
 */

var Progress = {

	init: function(id, width, height) {
		if(id && !document.getElementById(id)) {
			var w = width || '200px';
			var h = height || '16px';
			if(isFinite(w)) w += 'px';
			if(isFinite(h)) h += 'px';
			str='<div id="'+id+'" style="width:'+w+';height:'+h+';border:2px solid #666;background-color:#DDD;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;"><div style="background-color:#999;width:0px;height:'+h+';"></div></div>';
			return str;
		} else {
			return false;
		}
	},

	update: function(id, per) {
		var progid = document.getElementById(id);
		if(!progid) return false;
		var width = progid.offsetWidth;
		progid.childNodes[0].style.width = per+'%';
		//progid.childNodes[0].innerHTML = per+'%';
	},

	color: function(id, color) {
		var progid = document.getElementById(id);
		if(!progid) return false;
		var border, bg, bg_loaded;
		switch(color) {
			case 'gray':
				border = '#666';
				bg = '#DDD';
				bg_loaded = '#999';
				break;
			case 'red':
				border = '#F66';
				bg = '#FDD';
				bg_loaded = '#F99';
				break;
			case 'green':
				border = '#6F6';
				bg = '#DFD';
				bg_loaded = '#9F9';
				break;
			case 'blue':
				border = '#66F';
				bg = '#DDF';
				bg_loaded = '#99F';
				break;
			default:
				return false;
		}
		progid.style.borderColor = border;
		progid.style.backgroundColor = bg;
		progid.childNodes[0].style.backgroundColor = bg_loaded;
	}
}
