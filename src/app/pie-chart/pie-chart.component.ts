import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  chart:any;

  constructor() { }

  ngOnInit() {
    this._initializeChart();
    socket.on('data1', (data) => {
      data = data.splice(0, 6);
      this._updateChartdata(data, 0);
    })
    socket.on('data2', (data) => {
      data = data.splice(0, 6);
      this._updateChartdata(data, 1);
    })
  }

  private _updateChartdata(data, index) {
    this.chart.data.datasets[index].data = data;
    this.chart.update();
  }

  private _initializeChart() {
    this.chart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America", "India"],
        datasets: [{
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#8ef56e"],
          data: [2478,5267,734,784,433,500]
        },
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#8ef56e"],
          data: [248,527,734,784,433,500].reverse()
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050 [PIE CHART]'
        }
      }
  });
  }

}
