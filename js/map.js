function initMap() {
  var uluru = {lat: -51.503324, lng: 0.1217317};
  var map = new google.maps.Map(document.getElementById('map'),
      {
        zoom: 4,
        center: uluru
      });
  var marker = new google.maps.Marker({position: uluru, map: map});
}
