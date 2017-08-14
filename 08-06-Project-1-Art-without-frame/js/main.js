﻿// Home -  Flex panel galery

const panels = document.querySelectorAll('.home-panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

$('.selectpicker').selectpicker({
  });

//About - Google map API

var map;
function initialize() {
	var mapOptions = {
		zoom: 9,
		center: new google.maps.LatLng(50.744365542764285, -114.13913259277342),
		styles: 
		[
		    {
		        "featureType": "water",
		        "elementType": "all",
		        "stylers": [
		            {
		                "color": "#3b5998"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.province",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "all",
		        "elementType": "all",
		        "stylers": [
		            {
		                "hue": "#3b5998"
		            },
		            {
		                "saturation": -22
		            }
		        ]
		    },
		    {
		        "featureType": "landscape",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "on"
		            },
		            {
		                "color": "#f7f7f7"
		            },
		            {
		                "saturation": 10
		            },
		            {
		                "lightness": 76
		            }
		        ]
		    },
		    {
		        "featureType": "landscape.natural",
		        "elementType": "all",
		        "stylers": [
		            {
		                "color": "#f7f7f7"
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "all",
		        "stylers": [
		            {
		                "color": "#8b9dc3"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.country",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "visibility": "simplified"
		            },
		            {
		                "color": "#3b5998"
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "on"
		            },
		            {
		                "color": "#8b9dc3"
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "simplified"
		            },
		            {
		                "color": "#8b9dc3"
		            }
		        ]
		    },
		    {
		        "featureType": "transit.line",
		        "elementType": "all",
		        "stylers": [
		            {
		                "invert_lightness": false
		            },
		            {
		                "color": "#ffffff"
		            },
		            {
		                "weight": 0.43
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "road.local",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#8b9dc3"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "visibility": "on"
		            },
		            {
		                "color": "#3b5998"
		            }
		        ]
		    }
		]
	};
	map = new google.maps.Map(document.getElementById('contact-us__map'), mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);

//End of About - Google map API