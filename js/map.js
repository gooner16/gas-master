//map properties and initialization
function initialize() {

	var mapProp = {

  		center:new google.maps.LatLng(43.70011, -79.4163),
  		
  		zoom: 10,
  		
  		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var gasMap=new google.maps.Map(document.getElementById("gasMap"), mapProp);
	var startInput = document.getElementById('startInput');
    var autocomplete1 = new google.maps.places.Autocomplete(startInput); 
    var endInput = document.getElementById('endInput');
    var autocomplete2 = new google.maps.places.Autocomplete(endInput); 
}
