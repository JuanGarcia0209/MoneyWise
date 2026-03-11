import { Component, Input, OnChanges } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard-bar-chart',
  standalone: false,
  templateUrl: './bar-chart.component.html'
})
export class BarChartComponent implements OnChanges {

  @Input() data: any[] = [];

  barChartType: ChartType = 'bar';

  barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: []
  };

  ngOnChanges() {

    this.barChartData = {
      labels: this.data.map(d => d.mes),
      datasets: [
        {
          data: this.data.map(d => d.monto),
          label: 'Gastos'
        }
      ]
    };

  }

}
