import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageShows } from 'src/app/interface';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';
import {
  ApexDataLabels,
  ApexFill,
  ApexStroke,
  ApexYAxis,
} from 'ng-apexcharts/public_api';

@Component({
  selector: 'app-chart-fed',
  templateUrl: './chart-fed.component.html',
  styleUrls: ['./chart-fed.component.css'],
})

export class ChartFedComponent implements OnInit {
  series!: ApexAxisChartSeries;
  chart!: ApexChart;
  xaxis!: ApexXAxis;
  title!: ApexTitleSubtitle;

  series_2!: ApexAxisChartSeries;
  chart_2!: ApexChart;
  xaxis_2!: ApexXAxis;
  title_2!: ApexTitleSubtitle;
  strock_2!: ApexStroke;
  yaxis_2!: ApexYAxis;
  dataLabels_2!: ApexDataLabels;

  localurl: string = location.origin;
  constructor() {}

  ngOnInit(): void {
    this.drawChartBar();
    this.drawLine();
  }

  image: ImageShows = {
    title: 'Fed watch dot plot',
    src: 'assets/blog/fed.png',
  };

  drawLine() {
    (this.series_2 = [
      {
        name: 'Hôm nay',
        data: [4.36, 3.95, 3.94, 3.86, 4.12],
        color: '#003399',
      },
      {
        name: 'Tuần trước',
        data: [4.21, 3.82, 3.85, 4.1, 4.15],
        color: '#00bfff',
      },
      {
        name: 'Tháng trước',
        data: [4.31, 3.72, 3.65, 4.17, 4.45],
        color: '#ff6666',
      },
    ]),
      (this.chart_2 = {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      }),
      (this.strock_2 = {
        curve: 'straight',
        dashArray: [0, 3, 6],
        width: [3, 2, 1],
      }),
      (this.title_2 = {
        text: 'Dynamic Yield Curve',
        style:{
          fontFamily:'Roboto'
        }
      }),
      (this.xaxis_2 = {
        categories: ['US2Y', 'US5Y', 'US7Y', 'US10Y', 'US20Y'],
      }),
      (this.yaxis_2 = {
        min: 3,
        max: 5,
      }),
      (this.dataLabels_2 = {
        enabled: false,
      });
  }

  drawChartBar() {
    (this.series = [
      {
        name: 'Hôm nay',
        data: [71, 29, 0],
        color: '#003399',
      },
      {
        name: '1 ngày trước',
        data: [58, 40, 0],
        color: '#1a66ff',
      },
      {
        name: '1 tuần trước',
        data: [69, 31, 0],
        color: '#6699ff',
      },
      {
        name: '1 tháng trước',
        data: [33, 50, 17],
        color: '#b3ccff',
      },
    ]),
      (this.chart = {
        height: 350,
        type: 'bar',
      }),
      (this.title = {
        text: 'FedWatch - Current: 425-450',
        style:{
          fontFamily:'Roboto'
        }
      }),
      (this.xaxis = {
        categories: ['450-475', '475-500', '500-525'],
      });
  }
}
