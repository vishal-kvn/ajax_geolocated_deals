function parseDeals (json) {
	console.log("Number of deals : " + json.deals.length);
	//console.log(json.deals);

	deals = json.deals;

	for(var i= 0; i < deals.length; i++)
	{
		//console.log("Deal# " + i + deals[i]);
		var title, expiery;
		var deal = deals[i];
		var lat, lng;

		optionsloop:
		for (var j=0; j < deal.options.length; j++)
		{
			title = deal.options[j].title;
			expiery = deal.options[j].expiresAt;

			if(deal.options[j].redemptionLocations.length > 0)
				{
					lat = deal.options[j].redemptionLocations[0].lat;
					lng = deal.options[j].redemptionLocations[0].lng;
					break optionsloop;
				}
		}
		console.log("deal " + i + " lat: " + lat + " lng: " + lng);
		
		if((typeof lat == 'undefined') || (typeof lng == 'undefined'))
							{
								continue; //continue to next deal
							}

		var point = new google.maps.LatLng(parseFloat(lat),parseFloat(lng));
		var html='<strong>'+title+'</strong.><br />'+"ExpiresAt : "+expiery;
		
		addMarker(point, html);
		
	}

}


// function to make cross domain call
	function loadScript(url)
	{
	    // adding the script tag to the head
	   var head = document.getElementsByTagName('head')[0];
	   var script = document.createElement('script');
	   script.type = 'text/javascript';
	   script.src = url;

	   // fire the loading
	   head.appendChild(script);
	}
