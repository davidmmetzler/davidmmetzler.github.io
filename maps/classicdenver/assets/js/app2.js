$(window).resize(function() {
  sizeLayerControl();
});




$("#about-btn").click(function() {
  $("#aboutModal").modal("show");
  return false;
});

$("#about-btn").click(function() {
  $('#aboutModal').modal({
    backdrop: true
  });
});



//routing button





L.mapbox.accessToken = 'pk.eyJ1IjoiZG1ldHpsZXIiLCJhIjoiYzJkNWZkNzc1ZDQ3YTNkYzg3N2JhNGMxMGNhODIzN2YifQ.3j0XirEKNW4jVn7Qt2gbJw';
// Replace 'mapbox.streets' with your map id.
var mapboxTiles = L.tileLayer('https://api.mapbox.com/v4/dmetzler.vjazia4i/{z}/{x}/{y}.png?access_token=' + L.mapbox.accessToken, {
    attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>',


});
var MapQuestOpen_Aerial = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
var Acetate_roads = L.tileLayer('http://a{s}.acetate.geoiq.com/tiles/acetate-roads/{z}/{x}/{y}.png', {
  attribution: '&copy;2012 Esri & Stamen, Data from OSM and Natural Earth',
  subdomains: '0123'
});
var handle = document.getElementById('handle'),
    start = false,
    startTop;

var map = L.map('map', { zoomControl: false,
minZoom: 16,
  maxZoom: 18 })
    .addLayer(mapboxTiles)
    .setView([39.75114530601874, -104.99122023582458], 17);

//Hover interation

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};
info.update = function (props) {
    innerHTML =   (props ? '' + props.name + '' : 'Hover over a Building');
    $('#information').html( innerHTML );
};

info.addTo(map);

function highlightFeature(e) {
      var layer = e.target;
      
      layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
      });

      if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
      }

      info.update(layer.feature.properties);
      
    }


    

    function resetHighlight(e) {
      geojson.resetStyle(e.target);
      info.update();
  
      
    }

    function zoomToFeature(e) {
      map.fitBounds(e.target.getBounds());
    }

    function onEachFeature(feature, layer) {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
      });
    }






var geojson = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "#332F3E",
      fillColor: '#80C8B5',
      weight: 1.5,
      opacity: .9
    };
  },
  onEachFeature: onEachFeature
});
$.getJSON("data/buildings.geojson", function (data) {
  geojson.addData(data);
});
geojson.addTo(map);



//var osmb = new OSMBuildings(map).load();

new L.control.layers({}, 
  {  Imagery:MapQuestOpen_Aerial, Denver1903:mapboxTiles, 'Modern Roads':Acetate_roads, Buildings:geojson },
  {collapsed: false}
   ).setPosition('topright').addTo(map);
new L.Control.Zoom({ position: 'topright' }).addTo(map);
document.onmousemove = function(e) {
    if (!start) return;
    // Adjust control.
    handle.style.top = Math.max(-5, Math.min(195, startTop + parseInt(e.clientY, 10) - start)) + 'px';
    // Adjust opacity.
    mapboxTiles.setOpacity(1 - (handle.offsetTop / 200));
};
var myLayer = L.mapbox.featureLayer().addTo(map);
handle.onmousedown = function(e) {
    // Record initial positions.
    start = parseInt(e.clientY, 10);
    startTop = handle.offsetTop - 5;
    return false;
};

document.onmouseup = function(e) {
    start = null;
};








//L.control.layers(osmb).addTo(map);

function ajax(url, callback) {
  var req = new XMLHttpRequest();
  req.onreadystatechange = function() {
    if (req.readyState !== 4) {
      return;
    }
    if (!req.status || req.status < 200 || req.status > 299) {
      return;
    }

    callback(JSON.parse(req.responseText));
  };
  req.open('GET', url);
  req.send(null);
}

function formatJSON(json) {
  var html = '';
  for (var key in json) {
    html += '<em>'+ key +'</em> '+ json[key] +'<br>';
  }
  return html;
}

document.addEventListener('DOMContentLoaded', function() {
  

  var popup;



});


$("#searchbox").click(function () {
  $(this).select();
});

/* Typeahead search functionality */

  $("#loading").hide();
  /* Fit map to boroughs bounds */
  
  featureList = new List("features", {valueNames: ["feature-name"]});
  

  


  var geonamesBH = new Bloodhound({
    name: "GeoNames",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
      url: "http://api.geonames.org/searchJSON?username=bootleaf&featureClass=P&maxRows=5&countryCode=US&name_startsWith=%QUERY",
      filter: function (data) {
        return $.map(data.geonames, function (result) {
          return {
            name: result.name + ", " + result.adminCode1,
            lat: result.lat,
            lng: result.lng,
            source: "GeoNames"
          };
        });
      },
      ajax: {
        beforeSend: function (jqXhr, settings) {
          settings.url += "&east=" + map.getBounds().getEast() + "&west=" + map.getBounds().getWest() + "&north=" + map.getBounds().getNorth() + "&south=" + map.getBounds().getSouth();
          $("#searchicon").removeClass("fa-search").addClass("fa-refresh fa-spin");
        },
        complete: function (jqXHR, status) {
          $('#searchicon').removeClass("fa-refresh fa-spin").addClass("fa-search");
        }
      }
    },
    limit: 10
  });

  geonamesBH.initialize();



  /* instantiate the typeahead UI */
  $("#searchbox").typeahead({
    minLength: 3,
    highlight: true,
    hint: false
  }, {
    name: "GeoNames",
    displayKey: "name",
    source: geonamesBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'>&nbsp;GeoNames</h4>"
    }
  }).on("typeahead:selected", function (obj, datum) {
    
 //Geolocation tools   
var geolocate = document.getElementById('geolocate');

    if (datum.source === "GeoNames") {
      map.setView([datum.lat, datum.lng], 14);
    }
    if ($(".navbar-collapse").height() > 50) {
      $(".navbar-collapse").collapse("hide");
    }
  });


if (!navigator.geolocation) {
    geolocate.innerHTML = 'Geolocation is not available';
} else {
    geolocate.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        map.locate();
    };
}

// Once we've got a position, zoom and center the map
// on it, and add a single marker.
map.on('locationfound', function(e) {
    map.fitBounds(e.bounds);

    myLayer.setGeoJSON({
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [e.latlng.lng, e.latlng.lat]
        },
        properties: {
            'title': 'Here You Are!',
            'marker-color': '#d3ffce',
            'marker-symbol': 'star'
        }
    });

    // And hide the geolocation button

});

// If the user chooses not to allow their location
// to be shared, display an error message.
map.on('locationerror', function() {
    geolocate.innerHTML = 'Position could not be found';
});

//end geolocation tools
document.getElementById('navigation').onclick = function(e) {
    e.preventDefault();
    var markers = [];
    var zoom = e.target.getAttribute('zoom');
    var pos = e.target.getAttribute('data-position');
    if (pos) {
        var loc = pos.split(',');
        map.setView(loc, zoom);
        var popup = L.popup()
    .setLatLng(loc)
    .setContent(e.target.getAttribute('link'))
    .openOn(map);

    }
}

