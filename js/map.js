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

/*2. Get the route points and waypoints
 
//getRoutePointsAndWaypoints() will help you to pass points and waypoints to drawRoute() function
function getRoutePointsAndWaypoints() {
    //Define a variable for waypoints.
    var _waypoints = new Array();
 
    if (_mapPoints.length > 2) //Waypoints will be come.
    {
        for (var j = 1; j < _mapPoints.length - 1; j++) {
            var address = _mapPoints[j];
            if (address !== "") {
                _waypoints.push({
                    location: address,
                    stopover: true  //stopover is used to show marker on map for waypoints
                });
            }
        }
        //Call a drawRoute() function
        drawRoute(_mapPoints[0], _mapPoints[_mapPoints.length - 1], _waypoints);
    } else if (_mapPoints.length > 1) {
        //Call a drawRoute() function only for start and end locations
        drawRoute(_mapPoints[_mapPoints.length - 2], _mapPoints[_mapPoints.length - 1], _waypoints);
    } else {
        //Call a drawRoute() function only for one point as start and end locations.
        drawRoute(_mapPoints[_mapPoints.length - 1], _mapPoints[_mapPoints.length - 1], _waypoints);
    }
}

3. Draw the route

The following function is used to draw the route.
 
//drawRoute() will help actual draw the route on map.
function drawRoute(originAddress, destinationAddress, _waypoints) {
    //Define a request variable for route .
    var _request = '';
 
    //This is for more then two locatins
    if (_waypoints.length > 0) {
        _request = {
            origin: originAddress,
            destination: destinationAddress,
            waypoints: _waypoints, //an array of waypoints
            optimizeWaypoints: true, //set to true if you want google to determine the shortest route or false to use the order specified.
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        };
    } else {
        //This is for one or two locations. Here noway point is used.
        _request = {
            origin: originAddress,
            destination: destinationAddress,
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        };
    }
 
    //This will take the request and draw the route and return response and status as output
    directionsService.route(_request, function (_response, _status) {
        if (_status == google.maps.DirectionsStatus.OK) {
            _directionsRenderer.setDirections(_response);
        }
    });
}

http://www.c-sharpcorner.com/uploadfile/8911c4/how-to-draw-routes-and-calculate-route-time-and-distance-on/
http://stackoverflow.com/questions/13478646/google-map-api-get-latitude-and-longitude-from-autocomplete-without-map*/