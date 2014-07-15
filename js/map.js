$(function() {
    // Demo data
    var data = [
    	{ 'hc-key': 'ye-3662', value: 1 },
        { 'hc-key': 'ye-hu', value: 1 },
        { 'hc-key': 'ye-3415', value: 2 },
        { 'hc-key': 'ye-3427', value: 3 },
        { 'hc-key': 'ye-ad', value: 4 },
        { 'hc-key': 'ye-3430', value: 5 },
        { 'hc-key': 'ye-ta', value: 6 },
        { 'hc-key': 'ye-sd', value: 7 },
        { 'hc-key': 'ye-mw', value: 8 },
        { 'hc-key': 'ye-dh', value: 9 },
        { 'hc-key': 'ye-hj', value: 3 },
        { 'hc-key': 'ye-am', value: 8 },
        { 'hc-key': 'ye-ib', value: 10 },
        { 'hc-key': 'ye-la', value: 3 },
        { 'hc-key': 'ye-mr', value: 4 },
        { 'hc-key': 'ye-ba', value: 5 },
        { 'hc-key': 'ye-dl', value: 10 },
        { 'hc-key': 'ye-ja', value: 4 },
        { 'hc-key': 'ye-sh', value: 5 },
        { 'hc-key': 'ye-ma', value: 9 },
        { 'hc-key': 'ye-3426', value: 10 },
        { 'hc-key': 'ye-3428', value: 9 }
    ]

    // Initiate the chart
    $('#container').highcharts('Map', {

        title : {
            text : 'Yemen Sample Choropleth'
		},

		subtitle : {
			text: 'Incident counts by region'
		},

        credits: {
        	enabled: false
    	},

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            },
        },

        tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br>' + this.point.value;
                }
        },

        colorAxis: {
                min: 1,
                max: 10,
                // type: 'logarithmic',
                minColor: '#FBD8DB',
                maxColor: '#E9322D'
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/ye/ye-all'],
            joinBy: 'hc-key',
            name: 'Incident counts:',
            states: {
                hover: {
                    color: '#2C81BA'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    })

})