var wms_layers = [];


        var lyr_YandexSatellite_0 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_lab1_2 = new ol.format.GeoJSON();
var features_lab1_2 = format_lab1_2.readFeatures(json_lab1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_2.addFeatures(features_lab1_2);
var lyr_lab1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_2, 
                style: style_lab1_2,
                popuplayertitle: 'lab1',
                interactive: true,
                title: '<img src="styles/legend/lab1_2.png" /> lab1'
            });
var format_building_house_3 = new ol.format.GeoJSON();
var features_building_house_3 = format_building_house_3.readFeatures(json_building_house_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_3.addFeatures(features_building_house_3);
var lyr_building_house_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_house_3, 
                style: style_building_house_3,
                popuplayertitle: 'building_house',
                interactive: true,
                title: '<img src="styles/legend/building_house_3.png" /> building_house'
            });
var format_highway_4 = new ol.format.GeoJSON();
var features_highway_4 = format_highway_4.readFeatures(json_highway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_4.addFeatures(features_highway_4);
var lyr_highway_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_4, 
                style: style_highway_4,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_4.png" /> highway'
            });
var format_highway_5 = new ol.format.GeoJSON();
var features_highway_5 = format_highway_5.readFeatures(json_highway_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_5.addFeatures(features_highway_5);
var lyr_highway_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_5, 
                style: style_highway_5,
                popuplayertitle: 'Дороги  — highway',
                interactive: true,
                title: '<img src="styles/legend/highway_5.png" /> Дороги  — highway'
            });

lyr_YandexSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_lab1_2.setVisible(true);lyr_building_house_3.setVisible(true);lyr_highway_4.setVisible(true);lyr_highway_5.setVisible(true);
var layersList = [lyr_YandexSatellite_0,lyr_OSMStandard_1,lyr_lab1_2,lyr_building_house_3,lyr_highway_4,lyr_highway_5];
lyr_lab1_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_building_house_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'height': 'height', 'house': 'house', 'building:levels': 'building:levels', 'start_date': 'start_date', 'roof:shape': 'roof:shape', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'address': 'address', });
lyr_highway_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'ford': 'ford', 'access': 'access', 'maxspeed': 'maxspeed', 'distance': 'distance', 'barrier': 'barrier', 'railway': 'railway', 'maxheight': 'maxheight', 'crossing:barrier': 'crossing:barrier', 'traffic_sign': 'traffic_sign', 'name': 'name', });
lyr_highway_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'embankment': 'embankment', 'bicycle': 'bicycle', 'access': 'access', 'ford': 'ford', 'motor_vehicle': 'motor_vehicle', 'horse': 'horse', 'footway': 'footway', 'width': 'width', 'maxheight:signed': 'maxheight:signed', 'maxweight:signed': 'maxweight:signed', 'lane_markings': 'lane_markings', 'service': 'service', 'loc_name': 'loc_name', 'oneway': 'oneway', 'layer': 'layer', 'int_ref': 'int_ref', 'highway:category': 'highway:category', 'bridge': 'bridge', 'maxspeed': 'maxspeed', 'tracktype': 'tracktype', 'surface': 'surface', 'smoothness': 'smoothness', 'name:ru': 'name:ru', 'name:en': 'name:en', 'name': 'name', 'maxspeed:type': 'maxspeed:type', 'lanes': 'lanes', 'ref': 'ref', });
lyr_lab1_2.set('fieldImages', {'fid': '', 'name': 'TextEdit', });
lyr_building_house_3.set('fieldImages', {'fid': '', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'height': 'TextEdit', 'house': 'TextEdit', 'building:levels': 'TextEdit', 'start_date': 'TextEdit', 'roof:shape': 'TextEdit', 'addr:street': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:country': 'TextEdit', 'addr:city': 'TextEdit', 'address': '', });
lyr_highway_4.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'ford': '', 'access': '', 'maxspeed': '', 'distance': '', 'barrier': '', 'railway': '', 'maxheight': '', 'crossing:barrier': '', 'traffic_sign': '', 'name': '', });
lyr_highway_5.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'embankment': '', 'bicycle': '', 'access': '', 'ford': '', 'motor_vehicle': '', 'horse': '', 'footway': '', 'width': '', 'maxheight:signed': '', 'maxweight:signed': '', 'lane_markings': '', 'service': '', 'loc_name': '', 'oneway': '', 'layer': '', 'int_ref': '', 'highway:category': '', 'bridge': '', 'maxspeed': '', 'tracktype': '', 'surface': '', 'smoothness': '', 'name:ru': '', 'name:en': '', 'name': '', 'maxspeed:type': '', 'lanes': '', 'ref': '', });
lyr_lab1_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_building_house_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'height': 'no label', 'house': 'no label', 'building:levels': 'no label', 'start_date': 'no label', 'roof:shape': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:country': 'no label', 'addr:city': 'no label', 'address': 'no label', });
lyr_highway_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'ford': 'no label', 'access': 'no label', 'maxspeed': 'no label', 'distance': 'no label', 'barrier': 'no label', 'railway': 'no label', 'maxheight': 'no label', 'crossing:barrier': 'no label', 'traffic_sign': 'no label', 'name': 'no label', });
lyr_highway_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'embankment': 'no label', 'bicycle': 'no label', 'access': 'no label', 'ford': 'no label', 'motor_vehicle': 'no label', 'horse': 'no label', 'footway': 'no label', 'width': 'no label', 'maxheight:signed': 'no label', 'maxweight:signed': 'no label', 'lane_markings': 'no label', 'service': 'no label', 'loc_name': 'no label', 'oneway': 'no label', 'layer': 'no label', 'int_ref': 'no label', 'highway:category': 'no label', 'bridge': 'no label', 'maxspeed': 'no label', 'tracktype': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'name:ru': 'no label', 'name:en': 'no label', 'name': 'no label', 'maxspeed:type': 'no label', 'lanes': 'no label', 'ref': 'no label', });
lyr_highway_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});