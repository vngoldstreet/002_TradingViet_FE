import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexStroke,
  ApexYAxis,
  ApexDataLabels,
  ApexLegend
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  strock: ApexStroke;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
};

@Component({
  selector: 'app-chart-cot',
  templateUrl: './chart-cot.component.html',
  styleUrls: ['./chart-cot.component.css'],
})
export class ChartCotComponent implements OnInit {
  @ViewChild('chart')
  chart!: ChartComponent;
  public chartGoldOptions: Partial<ChartOptions> | any;
  public chartUSDOptions: Partial<ChartOptions> | any;
  public chartUsdWithOthers: Partial<ChartOptions> | any;
  public chartCOTEUR: Partial<ChartOptions> | any;
  public chartCOTGBP: Partial<ChartOptions> | any;
  public chartCOTAUD: Partial<ChartOptions> | any;
  public chartCOTJPY: Partial<ChartOptions> | any;
  public chartCOTCAD: Partial<ChartOptions> | any;
  public chartCOTCHF: Partial<ChartOptions> | any;

  constructor() {
    this.chartGoldOptions = {
      series: [
        {
          name: 'Managed Money Long',
          data: [
            -7378, -11803, -613, 1160, 4418, 3379, -3248, -915, -4089, -5919,
            -5542, -1756, -4373, 8635, -4441, -5021, -1328, 6197, 9846, 7006,
            -2904, -4129, 5597, 10108,
          ],
          color: '#0099ff',
        },
        {
          name: 'Managed Money Short',
          data: [
            11690, 11364, 11992, 1515, -30530, -21500, 1113, 13347, 6234, 12831,
            5833, 16602, 2026, -27584, -5736, 15097, 11762, 8810, -15209,
            -34797, 3122, 582, -3170, -3854,
          ],
          color: '#ff3333',
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      strock: {
        curve: 'straight',
        width: [1, 1],
      },
      title: {
        text: 'Gold - Futures Only Positions',
        style: {
          fontFamily: 'Roboto',
        },
      },
      xaxis: {
        sorted: true,
        categories: [
          '5-7-22',
          '12-7-22',
          '19-7-22',
          '26-7-22',
          '2-8-22',
          '9-8-22',
          '16-8-22',
          '23-8-22',
          '30-8-22',
          '6-9-22',
          '13-9-22',
          '20-9-22',
          '27-9-22',
          '4-10-22',
          '11-10-22',
          '18-10-22',
          '25-10-22',
          '1-11-22',
          '8-11-22',
          '15-11-22',
          '22-11-22',
          '29-11-22',
          '6-12-22',
          '13-12-22',
        ],
        labels: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend:{
        show: false
      }
    };
    this.chartUSDOptions = {
      series: [
        {
          name: 'USD Position',
          data: [
            13521, 15234, 13521, 14327, 16374, 17570, 19959,
            19454, 17925, 13675, 13797, 14669, 15121, 17078, 18191, 11582,
            11934, 11178, 11227, 11816, 8275, 1739, 1184, -1350, -2763, -2341,
            -3027, -4139,
          ],
          color: '#8000ff',
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
        zoom: {
          enabled: false,
        },
      },
      strock: {
        curve: 'straight',
        width: 1,
      },
      title: {
        text: 'Aggregate USD Position (trieu $)',
        style: {
          fontFamily: 'Roboto',
        },
      },
      xaxis: {
        sorted: true,
        categories: [
          '7-6-22',
          '14-6-22',
          '21-6-22',
          '28-6-22',
          '5-7-22',
          '12-7-22',
          '19-7-22',
          '26-7-22',
          '2-8-22',
          '9-8-22',
          '16-8-22',
          '23-8-22',
          '30-8-22',
          '6-9-22',
          '13-9-22',
          '20-9-22',
          '27-9-22',
          '4-10-22',
          '11-10-22',
          '18-10-22',
          '25-10-22',
          '1-11-22',
          '8-11-22',
          '15-11-22',
          '22-11-22',
          '29-11-22',
          '6-12-22',
          '13-12-22',
        ],
        labels: {
          show: true,
          rotateAlways: false,
          style: {
            fontSize: '8',
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend:{
        show: false
      }
    };
    this.chartUsdWithOthers = {
      series: [
        {
          name: 'USD Position',
          data: [-2012, 16576, -1989, -2594, -485, 1136, -1590, -4903],
          color: '#0099ff',
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
        zoom: {
          enabled: false,
        },
      },
      
      strock: {
        curve: 'straight',
        dashArray: [0, 3, 6],
        width: 1,
      },
      title: {
        text: 'Net Position vs USD (trieu $)',
        style: {
          fontFamily: 'Roboto',
        },
      },
      xaxis: {
        sorted: true,
        categories: ['CAD', 'EUR', 'GBP', 'AUD', 'NZD', 'MXM', 'CHF', 'JPY'],
        labels: {
          show: true,
          style: {
            fontSize: '8',
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend:{
        show: false
      }
    };
    this.chartCOTEUR = {
      series: [
        {
          name: 'Managed Money Long',
          data: [-12224,-1764,1685,1392,7706,2048,-2559,10755,2114,12156,3318,30951],
          color: '#0099ff',
        },
        {
          name: 'Managed Money Short',
          data: [-530,299,6095,-6895,-13711,-15867,-7924,-15123,-8148,-3302,1571,-3536],
          color: '#ff3333',
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      strock: {
        curve: 'straight',
        width: [1, 1],
      },
      title: {
        text: 'COT-EUR',
        style: {
          fontFamily: 'Roboto',
        },
      },
      xaxis: {
        sorted: true,
        categories: ['27-9-22','4-10-22','11-10-22','18-10-22','25-10-22','1-11-22','8-11-22','15-11-22','22-11-22','29-11-22','6-12-22','13-12-22'],
        labels: {
          show: true,
          style:{
            fontSize:'8',
          }
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend:{
        show: false
      }
    };
    this.chartCOTGBP = {
      series: [
        {
          name: 'Managed Money Long',
          data: [-100,119,-867,-1175,985,-546,-211,4030,-421,593,833,-1284],
          color: '#0099ff',
        },
        {
          name: 'Managed Money Short',
          data: [-12066,-9850,-4518,-4022,-4663,-13000,1331,-9162,-7123,-2365,-4232,-8881],
          color: '#ff3333',
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      strock: {
        curve: 'straight',
        width: [1, 1],
      },
      title: {
        text: 'COT-GBP',
        style: {
          fontFamily: 'Roboto',
        },
      },
      xaxis: {
        sorted: true,
        categories: ['27-9-22','4-10-22','11-10-22','18-10-22','25-10-22','1-11-22','8-11-22','15-11-22','22-11-22','29-11-22','6-12-22','13-12-22'],
        labels: {
          show: true,
          style:{
            fontSize:'8',
          }
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend:{
        show: false
      }
    };
    this.chartCOTAUD = {
      series: [
        {
          name: 'Managed Money Long',
          data: [-1945,5027,2204,-656,5745,-5349,-1155,883,2643,4080,2404,-568],
          color: '#0099ff',
        },
        {
          name: 'Managed Money Short',
          data: [-8844,-15895,2296,12353,4340,-1035,2839,420,-8238,-971,-2720,-1266],
          color: '#ff3333',
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      strock: {
        curve: 'straight',
        width: [1, 1],
      },
      title: {
        text: 'COT-AUD',
        style: {
          fontFamily: 'Roboto',
        },
      },
      xaxis: {
        sorted: true,
        categories: ['27-9-22','4-10-22','11-10-22','18-10-22','25-10-22','1-11-22','8-11-22','15-11-22','22-11-22','29-11-22','6-12-22','13-12-22'],
        labels: {
          show: true,
          style:{
            fontSize:'8',
          }
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend:{
        show: false
      }
    };
    this.chartCOTJPY = {
      series: [
        {
          name: 'Managed Money Long',
          data: [1918,620,-1054,763,-1552,-2880,-1052,580,1888,661,-3494,-4633],
          color: '#0099ff',
        },
        {
          name: 'Managed Money Short',
          data: [-6953,-3527,-3682,10320,3142,-3361,-2656,-13641,-8080,-2922,-10574,-4095],
          color: '#ff3333',
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      strock: {
        curve: 'straight',
        width: [1, 1],
      },
      title: {
        text: 'COT-JPY',
        style: {
          fontFamily: 'Roboto',
        },
      },
      xaxis: {
        sorted: true,
        categories: ['27-9-22','4-10-22','11-10-22','18-10-22','25-10-22','1-11-22','8-11-22','15-11-22','22-11-22','29-11-22','6-12-22','13-12-22'],
        labels: {
          show: true,
          style:{
            fontSize:'8',
          }
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend:{
        show: false
      }
    };
    this.chartCOTCAD = {
      series: [
        {
          name: 'Managed Money Long',
          data: [-49,1834,-3576,3758,-1130,1695,-987,-795,-943,-5934,-9288,-794],
          color: '#0099ff',
        },
        {
          name: 'Managed Money Short',
          data: [1237,2450,-2643,3453,1115,1093,1351,-2033,-3537,-457,11472,6978],
          color: '#ff3333',
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      strock: {
        curve: 'straight',
        width: [1, 1],
      },
      title: {
        text: 'COT-CAD',
        style: {
          fontFamily: 'Roboto',
        },
      },
      xaxis: {
        sorted: true,
        categories: ['27-9-22','4-10-22','11-10-22','18-10-22','25-10-22','1-11-22','8-11-22','15-11-22','22-11-22','29-11-22','6-12-22','13-12-22'],
        labels: {
          show: true,
          style:{
            fontSize:'8',
          }
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend:{
        show: false
      }
    };
    this.chartCOTCHF = {
      series: [
        {
          name: 'Managed Money Long',
          data: [525,-69,-745,407,-352,121,-216,-294,140,37,-103,-239],
          color: '#0099ff',
        },
        {
          name: 'Managed Money Short',
          data: [1943,-1186,1948,-1010,384,1044,-1483,-3393,-823,-1020,348,34],
          color: '#ff3333',
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      strock: {
        curve: 'straight',
        width: [1, 1],
      },
      title: {
        text: 'COT-CHF',
        style: {
          fontFamily: 'Roboto',
        },
      },
      xaxis: {
        sorted: true,
        categories: ['27-9-22','4-10-22','11-10-22','18-10-22','25-10-22','1-11-22','8-11-22','15-11-22','22-11-22','29-11-22','6-12-22','13-12-22'],
        labels: {
          show: true,
          style:{
            fontSize:'8',
          }
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend:{
        show: false
      }
    };
  }

  ngOnInit(): void {}
}
