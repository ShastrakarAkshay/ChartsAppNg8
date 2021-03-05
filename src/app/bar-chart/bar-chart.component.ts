import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  chart: any;

  constructor() { }

  ngOnInit() {
    this._initializeChart();

    socket.on('data1', (data) => {
      data = data.splice(0, 5);
      this._updateChartData(data, 0);
    })

    socket.on('data2', (data) => {
      data = data.splice(0, 5);
      this._updateChartData(data, 1);
    })

    
  }

  private _updateChartData(data, index) {
    this.chart.data.datasets[index].data = data;
    this.chart.update();
  }

  private _initializeChart() {
    this.chart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ["1900", "1950", "1999", "2050"], // x-axix
        datasets: [
          {
            label: "Africa",
            backgroundColor: "#3e95cd",
            data: [133, 221, 783, 1478]
          }, {
            label: "Europe",
            backgroundColor: "#8e5ea2",
            data: [408, 547, 675, 734]
          }, {
            label: "India",
            backgroundColor: "#8ef56e",
            data: [600, 700, 800, 900]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Population growth (millions) [BAR CHART]'
        }
      }
    });
  }

}
