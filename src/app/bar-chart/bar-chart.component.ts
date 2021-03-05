import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let chart = new Chart('barChart', {
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
