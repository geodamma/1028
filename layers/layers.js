ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3825").setExtent([179969.582684, 2702526.584330, 181815.552681, 2703780.317399]);
var wms_layers = [];

var lyr_1975_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "後浦1975",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1975_0.png",
    attributions: ' ',
                                projection: 'EPSG:3825',
                                alwaysInRange: true,
                                imageExtent: [180034.877242, 2702633.827561, 181628.833190, 2703656.104246]
                            })
                        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
    title: '后浦建築物<br />\
    <img src="styles/legend/_1_0.png" /> 中<br />\
    <img src="styles/legend/_1_1.png" /> 廢<br />\
    <img src="styles/legend/_1_2.png" /> B<br />\
    <img src="styles/legend/_1_3.png" /> M<br />\
    <img src="styles/legend/_1_4.png" /> R<br />\
    <img src="styles/legend/_1_5.png" /> T<br />\
    <img src="styles/legend/_1_6.png" /> <br />'
        });

lyr_1975_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_1975_0,lyr__1];
lyr__1.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', });
lyr__1.set('fieldImages', {'Build_STR': 'TextEdit', 'Build_NO': 'TextEdit', });
lyr__1.set('fieldLabels', {'Build_STR': 'header label', 'Build_NO': 'header label', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});