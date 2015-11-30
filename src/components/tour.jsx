var initialize = function() {
  var location = new google.maps.LatLng(-36.90063, 174.742702);
  var panoramaOptions = {
    zoom: 2,
    position:location,
    panControl:false,
    zoomControl:false,
    mapTypeControl:false,
    scaleControl:false,
    rotateControl:false,
    streetViewControl:false,
    overviewMapControl:false,
    disableDefaultUI: false,
    addressControl: false,
    addressControlOptions: {
      position: google.maps.ControlPosition.BOTTOM,
      hide: true
    },  
    mode : 'webgl',
  };
  panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), panoramaOptions);
}

var React = require('react');

module.exports = React.createClass({
  render: function() {
    google.maps.event.addDomListener(window, 'load', initialize);
    return <div id="pano"></div>
  }
})