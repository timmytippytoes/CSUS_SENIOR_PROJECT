jQuery(document).ready(function(){

	"use strict";
	$('#slider-carousel').carouFredSel({
		responsive: true,
		width: '100%',
		circular: true,
		scroll:{
			items:1,
			duration: 500,
			pauseOnHover: true
		},
		auto: false,
		prev: {
			button: "#button_prev",
			key: "left"
		},
		next: {
			button: "#button_next",
			key: "right"
		},
		items:
		{
			visible:{
				min:1,
				max:1
			},
			height:"variable"
		},
		pagination:{
			container: ".sliderpager",
			pageAnchorBuilder: false
		}
	});
	
	
});