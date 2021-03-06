function initialize() {
  console.log("a");
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: new google.maps.LatLng(-33.8665433, 151.1956316),
    zoom: 15
  });

  console.log("b");
  var request = {
    placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4'
  };
  console.log("c");

  var infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
console.log("d");
  service.getDetails(request, function(place, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
      });
    }
  });
  console.log("e");
}
console.log("f");
google.maps.event.addDomListener(window, 'load', initialize);
console.log("g");