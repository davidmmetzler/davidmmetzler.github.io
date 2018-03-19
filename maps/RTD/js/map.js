  var highlightLayer;
        function highlightFeature(e) {
            highlightLayer = e.target;

            if (e.target.feature.geometry.type === 'LineString') {
              highlightLayer.setStyle({
                color: '#ffff00',

              });
            } else {
              highlightLayer.setStyle({
                fillColor: '#ffff00',
                fillOpacity: 1
              });
            }
        }
        L.ImageOverlay.include({
            getBounds: function () {
                return this._bounds;
            }
        });
        var map = L.map('map', {
            zoomControl:true, maxZoom:26, minZoom:6
        }).fitBounds([[39.6920374216,-105.030664063],[39.7425904371,-104.918328344]]);
        var hash = new L.Hash(map);
        map.attributionControl.addAttribution('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a>');
        L.control.locate().addTo(map);
        var bounds_group = new L.featureGroup([]);
        var basemap0 = L.tileLayer('http://a.tile.stamen.com/toner/{z}/{x}/{y}.png', {
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>,<a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Mapdata: &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
            maxZoom: 26,
            opacity: .33,
        });
        basemap0.addTo(map);
        function setBounds() {
        }
        function geoJson2heat(geojson, weight) {
          return geojson.features.map(function(feature) {
            return [
              feature.geometry.coordinates[1],
              feature.geometry.coordinates[0],
              feature.properties[weight]
            ];
          });
        }
        function pop_LightRailLines0(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    layer.setStyle(style_LightRailLines0(feature));

                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['ROUTE'] !== null ? Autolinker.link(String(feature.properties['ROUTE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['NAME'] !== null ? Autolinker.link(String(feature.properties['NAME'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['TYPE'] !== null ? Autolinker.link(String(feature.properties['TYPE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['SHAPE_Leng'] !== null ? Autolinker.link(String(feature.properties['SHAPE_Leng'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent);
        }

        function style_LightRailLines0(feature) {
            switch(feature.properties['ROUTE']) {
                case '101':
                    return {
                pane: 'pane_LightRailLines0',
                opacity: 1,
                color: 'rgba(44,201,23,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
            }
                    break;
                case 'A-Line':
                    return {
                pane: 'pane_LightRailLines0',
                opacity: 1,
                color: 'rgba(5,202,189,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
            }
                    break;
                case 'B-Line':
                    return {
                pane: 'pane_LightRailLines0',
                opacity: 1,
                color: 'rgba(21,222,35,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
            }
                    break;
                case 'C-Line':
                    return {
                pane: 'pane_LightRailLines0',
                opacity: 1,
                color: 'rgba(236,174,14,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
            }
                    break;
                case 'D-Line':
                    return {
                pane: 'pane_LightRailLines0',
                opacity: 1,
                color: 'rgba(23,147,19,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
            }
                    break;
                case 'E-Line':
                    return {
                pane: 'pane_LightRailLines0',
                opacity: 1,
                color: 'rgba(142,38,168,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
            }
                    break;
                case 'F-Line':
                    return {
                pane: 'pane_LightRailLines0',
                opacity: 1,
                color: 'rgba(229,49,73,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
            }
                    break;
                case 'G-Line':
                    return {
                pane: 'pane_LightRailLines0',
                opacity: 1,
                color: 'rgba(247,176,8,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
            }
                    break;
                case 'H-Line':
                    return {
                pane: 'pane_LightRailLines0',
                opacity: 1,
                color: 'rgba(88,13,228,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
            }
                    break;
                case 'R-Line':
                    return {
                pane: 'pane_LightRailLines0',
                opacity: 1,
                color: 'rgba(180,213,16,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
            }
                    break;
                case 'W-Line':
                    return {
                pane: 'pane_LightRailLines0',
                opacity: 1,
                color: 'rgba(36,237,240,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
            }
                    break;
                default:
                    return {
                pane: 'pane_LightRailLines0',
                opacity: 1,
                color: 'rgba(168,201,119,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
            }
                    break;
            }
        }
        map.createPane('pane_LightRailLines0');
        map.getPane('pane_LightRailLines0').style.zIndex = 600;
        map.getPane('pane_LightRailLines0').style['mix-blend-mode'] = 'normal';
    var layer_LightRailLines0 = new L.geoJson(json_LightRailLines0, {
        attribution: '<a href=""></a>',
        pane: 'pane_LightRailLines0',
        onEachFeature: pop_LightRailLines0,
        style: style_LightRailLines0
    });
        bounds_group.addLayer(layer_LightRailLines0);
        map.addLayer(layer_LightRailLines0);
        function pop_BusRoutes1(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    layer.setStyle(style_BusRoutes1(feature));

                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['ROUTE'] !== null ? Autolinker.link(String(feature.properties['ROUTE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['NAME'] !== null ? Autolinker.link(String(feature.properties['NAME'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['TYPE'] !== null ? Autolinker.link(String(feature.properties['TYPE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['SHAPE_Leng'] !== null ? Autolinker.link(String(feature.properties['SHAPE_Leng'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent);
        }

        function style_BusRoutes1() {
            return {
                pane: 'pane_BusRoutes1',
                opacity: 1,
                color: 'rgba(3,3,219,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 1.0,
                fillOpacity: 0,
            }
        }
        map.createPane('pane_BusRoutes1');
        map.getPane('pane_BusRoutes1').style.zIndex = 601;
        map.getPane('pane_BusRoutes1').style['mix-blend-mode'] = 'normal';
    var layer_BusRoutes1 = new L.geoJson(json_BusRoutes1, {
        attribution: '<a href=""></a>',
        pane: 'pane_BusRoutes1',
        onEachFeature: pop_BusRoutes1,
        style: style_BusRoutes1
    });
        bounds_group.addLayer(layer_BusRoutes1);
        map.addLayer(layer_BusRoutes1);
        function pop_busstops2(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    layer.setStyle(style_busstops2(feature));

                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['BSID'] !== null ? Autolinker.link(String(feature.properties['BSID'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['ROUTES'] !== null ? Autolinker.link(String(feature.properties['ROUTES'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['STOPNAME'] !== null ? Autolinker.link(String(feature.properties['STOPNAME'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent);
        }

        function style_busstops2() {
            return {
                pane: 'pane_busstops2',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 0.0,
                fillOpacity: 1,
                fillColor: 'rgba(211,168,193,1.0)',
            }
        }
        map.createPane('pane_busstops2');
        map.getPane('pane_busstops2').style.zIndex = 602;
        map.getPane('pane_busstops2').style['mix-blend-mode'] = 'normal';
        var layer_busstops2 = new L.geoJson(json_busstops2, {
            attribution: '<a href=""></a>',
            pane: 'pane_busstops2',
            onEachFeature: pop_busstops2,

            pointToLayer: function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.circleMarker(latlng, style_busstops2(feature))
            }
        });
        bounds_group.addLayer(layer_busstops2);

        function pop_LightRailStations3(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    layer.setStyle(style_LightRailStations3(feature));

                },
                mouseover: highlightFeature,
            });
            feature.properties['NAME']
            var popupContent = '<table>' + '<b>' + feature.properties.NAME + '<tr><th>Lines:</th>' + '<td>' + feature.properties.SPECIAL_RT + '</td>' +
            '<tr><th>Address:</th>' + '<td>' + feature.properties.ADDRESS + '</td>' +
                '</td></table>';
            layer.bindPopup(popupContent);
        }

        function style_LightRailStations3(feature) {
            switch(feature.properties['SPECIAL_RT']) {
                case 'A Line':
                    return {
                pane: 'pane_LightRailStations3',
                radius: 8.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(6,147,203,1.0)',
            }
                    break;
                case 'A-B-C-E-W':
                    return {
                pane: 'pane_LightRailStations3',
                radius: 16.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(57,41,44,1.0)',
            }
                    break;
                case 'B Line':
                    return {
                pane: 'pane_LightRailStations3',
                radius: 8.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(9,146,21,1.0)',
            }
                    break;
                case 'C-D':
                    return {
                pane: 'pane_LightRailStations3',
                radius: 8.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(229,162,62,1.0)',
            }
                    break;
                case 'C-D-E-F-H':
                    return {
                pane: 'pane_LightRailStations3',
                radius: 12.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(111,101,107,1.0)',
            }
                    break;
                case 'C-E':
                    return {
                pane: 'pane_LightRailStations3',
                radius: 8.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(37,214,120,1.0)',
            }
                    break;
                case 'C-E-W':
                    return {
                pane: 'pane_LightRailStations3',
                radius: 10.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(214,214,214,1.0)',
            }
                    break;
                case 'D':
                    return {
                pane: 'pane_LightRailStations3',
                radius: 8.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(17,138,15,1.0)',
            }
                    break;
                case 'D-F-H':
                    return {
                pane: 'pane_LightRailStations3',
                radius: 10.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(139,139,139,1.0)',
            }
                    break;
                case 'E-F':
                    return {
                pane: 'pane_LightRailStations3',
                radius: 8.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(95,228,43,1.0)',
            }
                    break;
                case 'E-F-H':
                    return {
                pane: 'pane_LightRailStations3',
                radius: 10.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(148,148,148,1.0)',
            }
                    break;
                case 'G Line':
                    return {
                pane: 'pane_LightRailStations3',
                radius: 8.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(244,188,19,1.0)',
            }
                    break;
                case 'H Line':
                    return {
                pane: 'pane_LightRailStations3',
                radius: 8.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(34,66,225,1.0)',
            }
                    break;
                case 'R Line':
                    return {
                pane: 'pane_LightRailStations3',
                radius: 8.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(218,235,25,1.0)',
            }
                    break;
                case 'W Line':
                    return {
                pane: 'pane_LightRailStations3',
                radius: 8.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(54,119,217,1.0)',
            }
                    break;
                default:
                    return {
                pane: 'pane_LightRailStations3',
                radius: 8.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(155,20,204,1.0)',
            }
                    break;
            }
        }
        map.createPane('pane_LightRailStations3');
        map.getPane('pane_LightRailStations3').style.zIndex = 603;
        map.getPane('pane_LightRailStations3').style['mix-blend-mode'] = 'normal';
        var layer_LightRailStations3 = new L.geoJson(json_LightRailStations3, {
            attribution: '<a href=""></a>',
            pane: 'pane_LightRailStations3',
            onEachFeature: pop_LightRailStations3,
            pointToLayer: function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.circleMarker(latlng, style_LightRailStations3(feature))
            }
        });
        bounds_group.addLayer(layer_LightRailStations3);
        map.addLayer(layer_LightRailStations3);
        var baseMaps = {
        "Basemap": basemap0,
        };

        var overlayMaps = {
        "Light Rail Stations": layer_LightRailStations3,
         "Light Rail Lines": layer_LightRailLines0,
        "Bus Routes" :layer_BusRoutes1,
        "Bus Stops": layer_busstops2


        };
        L.control.layers(baseMaps,  overlayMaps).addTo(map);
        var popup = L.popup()
    .setLatLng(map.getCenter())
    .setContent('<p><b>Greetings!</b></p>' + '<p>This site will one day (hopefully) host some live RTD data of buses and Light Rail Trains. Right now it is pretty rough and I am constantly working on it so be sure to come back to see great new things such as fancy formatting on popups! In the meantime, enjoy this GIF! I certainly do. </p>' +
     "<img src='https://media.giphy.com/media/PH3qYh684NoEU/200w_d.gif'></img>")
    .openOn(map);


realtime = L.realtime({
        url: 'https://wanderdrone.appspot.com/',
        crossOrigin: true,
        type: 'json'
    }, {
        interval: 3 * 1000
    }).addTo(map);
        setBounds();