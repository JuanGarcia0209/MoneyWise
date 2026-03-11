import { Component, Input, OnChanges } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard-pie-chart',
  standalone: false,
  templateUrl: './pie-chart.component.html'
})
export class PieChartComponent implements OnChanges {

  @Input() data: any[] = [];

  pieChartType: ChartType = 'pie';

  pieChartData: ChartData<'pie'> = {
    labels: [],
    datasets: []
  };

  ngOnChanges() {

    this.pieChartData = {
      labels: this.data.map(d => d.categoria),
      datasets: [
        {
          data: this.data.map(d => d.monto),
          backgroundColor: this.data.map(d => d.color)
        }
      ]
    };

  }

}
