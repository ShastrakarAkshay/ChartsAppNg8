import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let chart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America", "India"],
        datasets: [{
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#8ef56e"],
          data: [2478,5267,734,784,433, 500]
        },
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#8ef56e"],
          data: [2478,5267,734,784,433, 500].reverse()
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
