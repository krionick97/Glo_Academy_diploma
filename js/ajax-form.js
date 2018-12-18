$(document).ready(function () {
			//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/Glo_Academy_diploma/PHPmail/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			// alert("Thank you!");
			$('.overlay').addClass('overlay_visible');			
			$('.overlay__button').click(function () { 			
				$('.overlay').removeClass('overlay_visible');
				// $('.order-maq').removeClass('order-maq_visible');
				// return false;
				});						

			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});