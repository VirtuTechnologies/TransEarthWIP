
$( function() {
// Add background image
	$.backstretch('TransEarth/images/city_dark.jpg');
	var endDate = "December  27, 2015 15:03:25";
	$('.countdown.simple').countdown({ date: endDate });
	$('.countdown.styled').countdown({
	  date: endDate,
	  render: function(data) {
		$(this.el).html("<div> 1276 <span>Trips Completed</span></div><div>40346<span>KM Travelled</span></div><div> 233625 <span>Tons Moved</span></div>");
		// $(this.el).html("<div>" + this.leadingZeros(data.days, 3) + " <span>Trips Completed</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
	  }
	});
	$('.countdown.callback').countdown({
	  date: +(new Date) + 10000,
	  render: function(data) {
		$(this.el).text(this.leadingZeros(data.sec, 2) + " sec");
	  },
	  onEnd: function() {
		$(this.el).addClass('ended');
	  }
	}).on("click", function() {
	  $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
	});

});
