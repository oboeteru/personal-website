var tester = function(){
	var my_ids = {}
	$( "p" ).each(function( index ) {
		my_ids['id' + index] = parseInt($('#id' + index).text());
	});
	$( ".cm-icon-load" ).css("height", "0");
	$( ".cm-icon-load" ).animate( {"height": "100%" }, "slow");
	var counter = 0;
	var statsCounter = setInterval(function(){
		if (counter < 21) {
		  for (i in my_ids){
			$('#' + i).text(parseInt(my_ids[i]/20*counter));
		  }
		} else {
		  clearInterval(statsCounter);	
		}
		counter++;   
	}, 50);
}
