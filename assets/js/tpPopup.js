/*
** tpPopup.js - Slice from tpScript
** Developed by Triadi Prabowo
** Dyanmic dialog jQuery plugin
** Dependency => jQuery ** run npm i jquery **
** Version 1.0 / Initial Build
*/

function initPopup() {
	var content = '';

	return content += '<div class=tp-popup><div class=left-row></div><div class=right-row></div></div>';
}

var index = -1;

$.fn.extend({
	tpPopup: function(settings) {
		index += 1;
		//Init popup
		$(this).append(initPopup());
		var data_left = '', data_right = '';		

		if(settings != undefined || settings.length != 0) {
			data_left += '<img class=tp-popup-avatar src='+settings.avatar+' />'
			data_right += '<h1 class=tp-popup-username>'+settings.username+'</h1>';
			data_right += '<p class=tp-popup-msg>'+settings.message+'</p>';

			$('.left-row:eq('+index+')').append(data_left);
			$('.right-row:eq('+index+')').append(data_right);
			$('.tp-popup:eq('+index+')').append('<div class=tp-popup-close><span class="tp-icon fa-close"></span></div>');	
		}
		else {
			console.log('Something wrong!');
		}
	}
});
