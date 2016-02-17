$(document).ready(function(){
	
	$('#fullpage').fullpage({
		//Navigation
        menu: '#menu',
        // lockAnchors: false,
        navigation: false,
        navigationPosition: 'right',
      	// anchors:['section0','section1', 'section2', 'section3']
        // showActiveTooltip: false,
        // slidesNavigation: true,
        // slidesNavPosition: 'bottom',
		// lockAnchors: false,
		// Below skips the 2nd page. about me section.
		
	});
	$(".headlineContent").hide().fadeIn(1500)
	$(".gutter").hide()
	$('#section2').hover(function(){
		$('.gutter').fadeIn(1000);
	});
})