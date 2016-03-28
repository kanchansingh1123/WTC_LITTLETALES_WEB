/// <reference path="../DefinitelyTyped/amcharts/AmCharts.d.ts" />



import {Directive} from 'angular2/core';

@Directive({
    selector: 'chart'
})

export class amChartDirective {
    constructor() {
        var chartData = [ {
    "country": "Lithuania",
    "litres": 501.9
  }, {
    "country": "Czech Republic",
    "litres": 301.9
  }, {
    "country": "Ireland",
    "litres": 201.1
  }, {
    "country": "Germany",
    "litres": 165.8
  }, {
    "country": "Australia",
    "litres": 139.9
  }, {
    "country": "Austria",
    "litres": 128.3
  }, {
    "country": "UK",
    "litres": 99
  }, {
    "country": "Belgium",
    "litres": 60
  }, {
    "country": "The Netherlands",
    "litres": 50
  } ];

        var chart;

        if (AmCharts.isReady) {
          createStockChart();
        } else {
          AmCharts.ready(function () {
              createStockChart();
          });
        }

        function createStockChart() {
            chart = new AmCharts.AmPieChart();
chart.dataProvider = chartData;
chart.titleField = "country";
chart.valueField = "litres";
chart.labelText = "[[title]]";

chart.write(chartdiv1);

chart = new AmCharts.AmPieChart();
chart.dataProvider = chartData;
chart.titleField = "country";
chart.valueField = "litres";
chart.labelText = "[[title]]";
//to show legend
legend = new AmCharts.AmLegend();
legend.position = "bottom";
legend.align = "center";
legend.markerType = "square";
legend.valueText = "";
chart.addLegend(legend);
chart.write(chartdiv2);

        }
        
    }
}