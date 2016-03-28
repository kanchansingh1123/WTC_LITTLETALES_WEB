import {Component} from 'angular2/core';
import {amChartDirective} from './chart';

@Component({
  selector: 'my-app',
  template:`
    <chart>helllo from AmCharts part 2<div id="chartdiv1" style="width:600px; height:600px;"></div></chart> <chart>helllo from AmCharts part 2<div id="chartdiv2" style="width:600px; height:600px;"></div></chart>
    `,
  directives: [amChartDirective]
})

export class AppComponent {}



