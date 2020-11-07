if (typeof jQuery === 'undefined') {
	throw new Error('BEL-CMS requires jQuery min 3.3.1')
}
(function($) {
	console.log("Chargement BEL-CMS Management script Ok");
	"use strict";


	$('.management_menu_user_sub').click(function () {
	var currentLink = $(this).attr('href').replace('#', '');
		var up = $('#'+currentLink).hasClass('up');
		if (up) {
			$('#'+currentLink).addClass('down').removeClass('up').slideDown ();
		} else {
			$('#'+currentLink).addClass('up').removeClass('down').slideUp ();
		}
	});

/*
	$('#management_menu_user_sub').click(function(e){
		var up = $('#management_menu_user ul').hasClass('up');
		if (up) {
			$('#management_menu_user ul').addClass('down').removeClass('up').slideDown ();
		} else {
			$('#management_menu_user ul').addClass('up').removeClass('down').slideUp ();
		}
	});

	*/


})(jQuery);