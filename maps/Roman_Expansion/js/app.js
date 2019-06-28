
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
                fillOpacity: .4
              });
            }
        }
        var map = L.map('map', {
            zoomControl:true, maxZoom:28, minZoom:1
        }).fitBounds([[12.16605416902113,-12.060557419993028],[61.99447774692738,43.840350580277644]]);
        var hash = new L.Hash(map);

        var measureControl = new L.Control.Measure({
            position: 'topleft',
            primaryLengthUnit: 'feet',
            secondaryLengthUnit: 'miles',
            primaryAreaUnit: 'sqmiles'

        });
        measureControl.addTo(map);
        document.getElementsByClassName('leaflet-control-measure-toggle')[0]
        .innerHTML = '';
        document.getElementsByClassName('leaflet-control-measure-toggle')[0]
        .className += ' fas fa-ruler';
        var bounds_group = new L.featureGroup([]);
        function setBounds() {
        }
        function pop_EXPANSION_0(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                },
                click: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2"><strong>Year </strong><br />' + (feature.properties['year'] !== null ? Autolinker.link(String(feature.properties['year'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>Event  </strong><br />' + (feature.properties['event'] !== null ? Autolinker.link(String(feature.properties['event'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                    </tr>\
                </table>';
                var customOptions =
                {
                'maxWidth': '400',
                'width': '400',
                'className' : 'popupCustom'
                };
            
            layer.bindPopup(popupContent, customOptions);
        }

        function style_EXPANSION_0_0(feature) {
            switch(String(feature.properties['year_num'])) {
                case '-500':
                    return {
                pane: 'pane_EXPANSION_0',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0,
                fill: true,
                fillOpacity: 0.3,
                fillColor: 'rgba(215,25,28,1.0)',
            }
                    break;
                case '-338':
                    return {
                pane: 'pane_EXPANSION_0',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0,
                fill: true,
                fillOpacity: 0.3,
                fillColor: 'rgba(227,71,49,1.0)',
            }
                    break;
                case '-298':
                    return {
                pane: 'pane_EXPANSION_0',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0,
                fill: true,
                fillOpacity: 0.3,
                fillColor: 'rgba(239,117,70,1.0)',
            }
                    break;
                case '-290':
                    return {
                pane: 'pane_EXPANSION_0',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0,
                fill: true,
                fillOpacity: 0.3,
                fillColor: 'rgba(251,163,92,1.0)',
            }
                    break;
                case '-264':
                    return {
                pane: 'pane_EXPANSION_0',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0,
                fill: true,
                fillOpacity: 0.3,
                fillColor: 'rgba(254,188,113,1.0)',
            }
                    break;
                case '-218':
                    return {
                pane: 'pane_EXPANSION_0',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0,
                fill: true,
                fillOpacity: 0.3,
                fillColor: 'rgba(254,206,134,1.0)',
            }
                    break;
                case '-202':
                    return {
                pane: 'pane_EXPANSION_0',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0,
                fill: true,
                fillOpacity: 0.3,
                fillColor: 'rgba(255,224,155,1.0)',
            }
                    break;
                case '-156':
                    return {
                pane: 'pane_EXPANSION_0',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0,
                fill: true,
                fillOpacity: 0.3,
                fillColor: 'rgba(255,242,176,1.0)',
            }
                    break;
                case '-60':
                    return {
                pane: 'pane_EXPANSION_0',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0,
                fill: true,
                fillOpacity: 0.3,
                fillColor: 'rgba(245,251,188,1.0)',
            }
                    break;
                case '14':
                    return {
                pane: 'pane_EXPANSION_0',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0,
                fill: true,
                fillOpacity: 0.3,
                fillColor: 'rgba(203,234,174,1.0)',
            }
                    break;
                case '69':
                    return {
                pane: 'pane_EXPANSION_0',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0,
                fill: true,
                fillOpacity: 0.3,
                fillColor: 'rgba(161,214,166,1.0)',
            }
                    break;
                case '117':
                    return {
                pane: 'pane_EXPANSION_0',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0,
                fill: true,
                fillOpacity: 0.3,
                fillColor: 'rgba(122,187,173,1.0)',
            }
                    break;
                case '200':
                    return {
                pane: 'pane_EXPANSION_0',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0,
                fill: true,
                fillOpacity: 0.3,
                fillColor: 'rgba(82,159,179,1.0)',
            }
                    break;
                default:
                    return {
                pane: 'pane_EXPANSION_0',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0,
                fill: true,
                fillOpacity: 0.3,
                fillColor: 'rgba(43,131,186,1.0)',
            }
                    break;
            }
        }
        map.createPane('pane_EXPANSION_0');
        map.getPane('pane_EXPANSION_0').style.zIndex = 400;
        map.getPane('pane_EXPANSION_0').style['mix-blend-mode'] = 'normal';
        var layer_EXPANSION_0 = new L.geoJson(json_EXPANSION_0, {
            attribution: '<a href=""></a>',
            pane: 'pane_EXPANSION_0',
            onEachFeature: pop_EXPANSION_0,
            style: style_EXPANSION_0_0,
        });
        bounds_group.addLayer(layer_EXPANSION_0);
        map.addLayer(layer_EXPANSION_0);
        function pop_citiesfoundedbyrome5_1(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table >\
                    <tr>\
                        <td colspan="2"><strong>Year Founded ' + (feature.properties['founded'] !== null ? Autolinker.link(String(feature.properties['founded'])) : '</strong><br />') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Roman Name</th>\
                        <td>' + (feature.properties['roman name'] !== null ? Autolinker.link(String(feature.properties['roman name'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Modern Name</th>\
                        <td>' + (feature.properties['modern nam'] !== null ? Autolinker.link(String(feature.properties['modern nam'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Country</th>\
                        <td>' + (feature.properties['country'] !== null ? Autolinker.link(String(feature.properties['country'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                    <tr>\
                    </tr>\
                    <tr>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_citiesfoundedbyrome5_1_0(feature) {
            if (feature.properties['foundedYR'] >= -753.000000 && feature.properties['foundedYR'] <= -472.400000 ) {
                return {
                pane: 'pane_citiesfoundedbyrome5_1',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(215,25,28,1.0)',
            }
            }
            if (feature.properties['foundedYR'] >= -472.400000 && feature.properties['foundedYR'] <= -191.800000 ) {
                return {
                pane: 'pane_citiesfoundedbyrome5_1',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(253,174,97,1.0)',
            }
            }
            if (feature.properties['foundedYR'] >= -191.800000 && feature.properties['foundedYR'] <= 88.800000 ) {
                return {
                pane: 'pane_citiesfoundedbyrome5_1',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,255,191,1.0)',
            }
            }
            if (feature.properties['foundedYR'] >= 88.800000 && feature.properties['foundedYR'] <= 369.400000 ) {
                return {
                pane: 'pane_citiesfoundedbyrome5_1',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(171,221,164,1.0)',
            }
            }
            if (feature.properties['foundedYR'] >= 369.400000 && feature.properties['foundedYR'] <= 650.000000 ) {
                return {
                pane: 'pane_citiesfoundedbyrome5_1',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(43,131,186,1.0)',
            }
            }
        }
        map.createPane('pane_citiesfoundedbyrome5_1');
        map.getPane('pane_citiesfoundedbyrome5_1').style.zIndex = 401;
        map.getPane('pane_citiesfoundedbyrome5_1').style['mix-blend-mode'] = 'normal';
        var layer_citiesfoundedbyrome5_1 = new L.geoJson(json_citiesfoundedbyrome5_1, {
            attribution: '<a href=""></a>',
            pane: 'pane_citiesfoundedbyrome5_1',
            onEachFeature: pop_citiesfoundedbyrome5_1,
            pointToLayer: function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.circleMarker(latlng, style_citiesfoundedbyrome5_1_0(feature));
            },
        });
        bounds_group.addLayer(layer_citiesfoundedbyrome5_1);
        map.addLayer(layer_citiesfoundedbyrome5_1);
        tile_layer2 = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
});


map.addLayer(tile_layer2);
        var baseMaps = {};
        L.control.layers(baseMaps,{'Founded By Rome<br /><table><tr><td style="text-align: center;"><img src="legend/citiesfoundedbyrome5_1_7534720.png" /></td><td> -753 - -472 </td></tr><tr><td style="text-align: center;"><img src="legend/citiesfoundedbyrome5_1_4721921.png" /></td><td> -472 - -192 </td></tr><tr><td style="text-align: center;"><img src="legend/citiesfoundedbyrome5_1_192892.png" /></td><td> -192 - 89 </td></tr><tr><td style="text-align: center;"><img src="legend/citiesfoundedbyrome5_1_893693.png" /></td><td> 89 - 369 </td></tr><tr><td style="text-align: center;"><img src="legend/citiesfoundedbyrome5_1_3696504.png" /></td><td> 369 - 650 </td></tr></table>': layer_citiesfoundedbyrome5_1,'Roman Expansion<br /><table><tr><td style="text-align: center;"><img src="legend/EXPANSION_0_5000.png" /></td><td>-500</td></tr><tr><td style="text-align: center;"><img src="legend/EXPANSION_0_3381.png" /></td><td>-338</td></tr><tr><td style="text-align: center;"><img src="legend/EXPANSION_0_2982.png" /></td><td>-298</td></tr><tr><td style="text-align: center;"><img src="legend/EXPANSION_0_2903.png" /></td><td>-290</td></tr><tr><td style="text-align: center;"><img src="legend/EXPANSION_0_2644.png" /></td><td>-264</td></tr><tr><td style="text-align: center;"><img src="legend/EXPANSION_0_2185.png" /></td><td>-218</td></tr><tr><td style="text-align: center;"><img src="legend/EXPANSION_0_2026.png" /></td><td>-202</td></tr><tr><td style="text-align: center;"><img src="legend/EXPANSION_0_1567.png" /></td><td>-156</td></tr><tr><td style="text-align: center;"><img src="legend/EXPANSION_0_608.png" /></td><td>-60</td></tr><tr><td style="text-align: center;"><img src="legend/EXPANSION_0_149.png" /></td><td>14</td></tr><tr><td style="text-align: center;"><img src="legend/EXPANSION_0_6910.png" /></td><td>69</td></tr><tr><td style="text-align: center;"><img src="legend/EXPANSION_0_11711.png" /></td><td>117</td></tr><tr><td style="text-align: center;"><img src="legend/EXPANSION_0_20012.png" /></td><td>200</td></tr><tr><td style="text-align: center;"><img src="legend/EXPANSION_0_13.png" /></td><td></td></tr></table>': layer_EXPANSION_0,},{collapsed:false}).addTo(map);
        setBounds();
        map.addControl(new L.Control.Search({
            layer: layer_citiesfoundedbyrome5_1,
            initial: false,
            hideMarkerOnCollapse: true,
            propertyName: 'modern nam'}));
        document.getElementsByClassName('search-button')[0].className +=
         ' fa fa-binoculars';

