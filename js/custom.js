$(document).ready(function(){

	//Menu
	$('.nav-icon').click(function(){
		$(this).toggleClass('active');
		$('.menu').stop().toggleClass('active');
		$('body').toggleClass('menu-active');
	});	
	
	//Accordian
	$('.accordian-list li').each(function(){
		$(this).click(function(){
			$(this).toggleClass('active');
			$(this).find('.accordian-content').slideToggle('fast');	
			$(this).siblings().removeClass('active');
			$(this).siblings().find('.accordian-content').slideUp('fast');				
		});								  
	});

});

//AOS Scroll Animation init
AOS.init();



