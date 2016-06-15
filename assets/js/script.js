$(document).ready(function(){

	// Спрячем все отзывы, кроме первого
	$('#testimonials li').hide().eq(0).show();

	// функция, которая циркулирует отзывы:
	(function showNextTestimonial(){

		// Ждём 7.5 секунд, перед тем, как сменить отзыв:
		$('#testimonials li:visible').delay(7500).fadeOut('slow',function(){

			// Ставим его в конец списка:
			$(this).appendTo('#testimonials ul');

			// Показываем следующий отзыв:
			$('#testimonials li:first').fadeIn('slow',function(){

				// Вызываем функцию снова:
				showNextTestimonial();
			});
		});
	})();

});
