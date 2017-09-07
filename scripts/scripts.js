$(document).ready(function(){
	$(".button-collapse").sideNav({
      closeOnClick: true,
      draggable: true,
  });

	$('.scroll-nav').click(function(e) {
		var link = $(this).attr('href');
		$('html, body').animate({
				scrollTop: $(link).offset().top
		}, 900);
		e.preventDefault();
	});

    $('select').material_select();
		$('.collapsible').collapsible();
});
