function initialize() {
	if (navigator.geolocation)
	{
	    navigator.geolocation.getCurrentPosition(handle_geolocation_query, handle_errors);
	}

  function handle_errors(error)
  {
      switch(error.code)
      {
          case error.PERMISSION_DENIED: alert("user did not share geolocation data");
              break;

          case error.POSITION_UNAVAILABLE: alert("could not detect current position");
              break;

          case error.TIMEOUT: alert("retrieving position timedout");
              break;

          default: alert("unknown error");
              break;
      }
  }

  function handle_geolocation_query(position){
//                alert('Lat: ' + position.coords.latitude + ' ' +
//                    'Lon: ' + position.coords.latitude);
      clat = position.coords.latitude;//40.353;//40.714623; //37.4419444;//40.353;//
      clng = position.coords.longitude;//-74.673;//-74.006605;//-122.1419444;//-74.673;//

			var myLatlng = new google.maps.LatLng(38,-97);
      var myOptions = {
          zoom: 3,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      mymap = new google.maps.Map(document.getElementById("map"), myOptions);

      console.log('values to map current location' + 'lat: ' + clat + ' lng: ' + clng);
  }
}

// Function for adding a marker to the page.
function addMarker(location, message) {
  marker = new google.maps.Marker({
      position: location,
      map: mymap,
      animation: google.maps.Animation.DROP
  });

addInfoWindow(marker, message)
}
        
// function to add info window for markers
function addInfoWindow(marker, message) {
	var cinfoWindow = new google.maps.InfoWindow();
	var chtml = message;

	google.maps.event.addListener(marker, 'click', function() {
		cinfoWindow.setContent(chtml);
		cinfoWindow.open(mymap, marker);
	});
}


 // function to add current location marker 
 function CurrentLocation() {
     Marker1=new google.maps.LatLng(clat, clng); addMarker(Marker1, "Current Location");
 }