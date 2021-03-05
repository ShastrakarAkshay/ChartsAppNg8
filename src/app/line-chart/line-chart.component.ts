import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  chart: any;

  constructor() { }

  ngOnInit() {
    this._initializeChart();

    socket.on('data1', (data) => {
      this._updateChartData(this.chart, data, 0);
    })

    socket.on('data2', (data) => {
      this._updateChartData(this.chart, data, 1);
    })

  }

  private _updateChartData(chart, data, datasetIndex) {
    this.chart.data.datasets[datasetIndex].data = data;
    this.chart.update();
  }

  private _initializeChart() {
    this.chart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: [1500,1600,1700,1750,1800,1850,1900,1950],
        datasets: [{ 
            data: [86,114,106,106,107,111,133,221],
            label: "Africa",
            borderColor: "#3e95cd",
            fill: false
          }, { 
            data: [282,350,411,502,635,809,947, 500],
            label: "Asia",
            borderColor: "#8e5ea2",
            fill: false
          }, { 
            data: [168,170,178,190,203,276,408,547],
            label: "Europe",
            borderColor: "#3cba9f",
            fill: false
          }, { 
            data: [10,16,24,38,74,167,508,784],
            label: "Latin America",
            borderColor: "#e8c3b9",
            fill: false
          }, { 
            data: [6,3,2,2,7,26,82,172],
            label: "North America",
            borderColor: "#c45850",
            fill: false
          }, {
            label: "India",
            data: [450,700,400,456,204,120,300],
            borderColor: "#c4ff50",
            fill: true
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'World population per region (in millions)'
        }
      }
    });
  }
}
