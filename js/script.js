function initMap () {
  var map = new google.maps.Map( $('#google-map')[0], { 
    center: { lat: 47.6062, lng: -122.3493 },
    zoom: 10
  });
 
  $('#select').on('change', function () {
    if($(this).val() == 'spaceneedle') {
      var latLng = new google.maps.LatLng(47.6205, -122.3493);
      map.setZoom (15);
      map.panTo(latLng);
    } else if ($(this).val() == 'bellevue') {
      var latLng = new google.maps.LatLng(47.6101, -122.2015);
      map.setZoom (15);
      map.panTo(latLng);
    } else if ($(this).val() == 'kirkland') {
      var latLng = new google.maps.LatLng(47.6769, -122.2060);
      map.setZoom (15);
      map.panTo(latLng);      
    } else if  ($(this).val() == 'issaquah') {
      var latLng = new google.maps.LatLng(47.5301, -122.0326);
      map.setZoom (15);
      map.panTo(latLng);  
    } else if  ($(this).val() == 'sammamish') {
      var latLng = new google.maps.LatLng(47.6163, -122.0356);
      map.setZoom (15);
      map.panTo(latLng);   
    };
  });
};

