import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexStroke,
  ApexYAxis,
  ApexDataLabels
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  strock: ApexStroke;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-chart-cot',
  templateUrl: './chart-cot.component.html',
  styleUrls: ['./chart-cot.component.css']
})

export class ChartCotComponent implements OnInit {
  // @ViewChild("chart") chart : ChartComponent;
  public chartOptions : Partial<ChartOptions> = {
    series: [
      {
        name: 'Managed Money Long',
        data: [-7378,-11803,-613,1160,4418,3379,-3248,-915,-4089,-5919,-5542,-1756,-4373,8635,-4441,-5021,-1328,6197,9846,7006,-2904,-4129,5597,10108],
        color: '#0099ff',
      },
      {
        name: 'Managed Money Short',
        data: [11690,11364,11992,1515,-30530,-21500,1113,13347,6234,12831,5833,16602,2026,-27584,-5736,15097,11762,8810,-15209,-34797,3122,582,-3170,-3854],
        color: '#ff3333',
      },
    ],
    chart : {
      height: 350,
      type: 'bar',
    },
    strock: {
      curve: 'straight',
      width: [1,1],
    },
    title : {
      text: 'Aggregate USD Position (trieu $)',
      style:{
        fontFamily:'Roboto'
      }
    },
    xaxis : {
      sorted:true,
      categories: ['5-7-22','12-7-22','19-7-22','26-7-22','2-8-22','9-8-22','16-8-22','23-8-22','30-8-22','6-9-22','13-9-22','20-9-22','27-9-22','4-10-22','11-10-22','18-10-22','25-10-22','1-11-22','8-11-22','15-11-22','22-11-22','29-11-22','6-12-22','13-12-22'],
      labels:{
        show:false,
      }
    },
    dataLabels : {
      enabled: false,
    }
  }

  usd_series!: ApexAxisChartSeries;
  usd_chart!: ApexChart;
  usd_xaxis!: ApexXAxis;
  usd_title!: ApexTitleSubtitle;
  usd_strock!: ApexStroke;
  usd_yaxis!: ApexYAxis;
  usd_dataLabels!: ApexDataLabels;

  gold_series!: ApexAxisChartSeries;
  gold_chart!: ApexChart;
  gold_xaxis!: ApexXAxis;
  gold_title!: ApexTitleSubtitle;
  gold_strock!: ApexStroke;
  gold_yaxis!: ApexYAxis;
  gold_dataLabels!: ApexDataLabels;

  // series!: ApexAxisChartSeries;
  // chart!: ApexChart;
  // xaxis!: ApexXAxis;
  // title!: ApexTitleSubtitle;
  // strock!: ApexStroke;
  // yaxis!: ApexYAxis;
  // dataLabels!: ApexDataLabels;

  constructor() { 

  }

  ngOnInit(): void {
   
    this.chartOptions = {
      series: [
        {
          name: 'Managed Money Long',
          data: [-7378,-11803,-613,1160,4418,3379,-3248,-915,-4089,-5919,-5542,-1756,-4373,8635,-4441,-5021,-1328,6197,9846,7006,-2904,-4129,5597,10108],
          color: '#0099ff',
        },
        {
          name: 'Managed Money Short',
          data: [11690,11364,11992,1515,-30530,-21500,1113,13347,6234,12831,5833,16602,2026,-27584,-5736,15097,11762,8810,-15209,-34797,3122,582,-3170,-3854],
          color: '#ff3333',
        },
      ],
      chart : {
        height: 350,
        type: 'bar',
      },
      strock: {
        curve: 'straight',
        width: [1,1],
      },
      title : {
        text: 'Aggregate USD Position (trieu $)',
        style:{
          fontFamily:'Roboto'
        }
      },
      xaxis : {
        sorted:true,
        categories: ['5-7-22','12-7-22','19-7-22','26-7-22','2-8-22','9-8-22','16-8-22','23-8-22','30-8-22','6-9-22','13-9-22','20-9-22','27-9-22','4-10-22','11-10-22','18-10-22','25-10-22','1-11-22','8-11-22','15-11-22','22-11-22','29-11-22','6-12-22','13-12-22'],
        labels:{
          show:false,
        }
      },
      dataLabels : {
        enabled: false,
      }
    }
    this.drawLine()
    // this.drawLineUsdWithOthers()
  }

  drawLine() {
    
    (this.usd_series = [
      {
        name: 'USD Position',
        data: [3558,2671,3749,1550,9113,11661,11099,9946,14177,16140,23198,23865,22290,20507,19750,19025,18470,22302,24651,20266,20153,20235,19944,19699,20034,13034,10608,10544,8466,7164,6159,5050,5046,8921,13537,16374,14223,12862,12340,13422,19448,20230,20171,18151,15029,13521,15234,13521,14327,16374,17570,19959,19454,17925,13675,13797,14669,15121,17078,18191,11582,11934,11178,11227,11816,8275,1739,1184,-1350,-2763,-2341,-3027,-4139],
        color: '#8000ff',
      },
    ]),
      (this.usd_chart = {
        height: 350,
        type: 'bar',
        zoom: {
          enabled: false,
        },
      }),
      (this.usd_strock = {
        curve: 'straight',
        dashArray: [0, 3, 6],
        width: 1,
      }),
      (this.usd_title = {
        text: 'Aggregate USD Position (trieu $)',
        style:{
          fontFamily:'Roboto'
        }
      }),
      (this.usd_xaxis = {
        sorted:true,
        categories: ['27-7-21','3-8-21','10-8-21','17-8-21','24-8-21','31-8-21','7-9-21','14-9-21','21-9-21','28-9-21','5-10-21','12-10-21','19-10-21','26-10-21','2-11-21','9-11-21','16-11-21','23-11-21','30-11-21','7-12-21','14-12-21','21-12-21','28-12-21','4-1-22','11-1-22','18-1-22','25-1-22','1-2-22','8-2-22','15-2-22','22-2-22','1-3-22','8-3-22','15-3-22','22-3-22','29-3-22','5-4-22','12-4-22','19-4-22','26-4-22','3-5-22','10-5-22','17-5-22','24-5-22','31-5-22','7-6-22','14-6-22','21-6-22','28-6-22','5-7-22','12-7-22','19-7-22','26-7-22','2-8-22','9-8-22','16-8-22','23-8-22','30-8-22','6-9-22','13-9-22','20-9-22','27-9-22','4-10-22','11-10-22','18-10-22','25-10-22','1-11-22','8-11-22','15-11-22','22-11-22','29-11-22','6-12-22','13-12-22'],
        labels:{
          show:false,
        }
      }),
      // (this.usd_yaxis= {
      //   min: 0,
      //   max: 50000,
      // }),
      (this.usd_dataLabels = {
        enabled: false,
      });
  }

  // drawLineUsdWithOthers() {
  //   (this.series = [
  //     {
  //       name: 'USD Position',
  //       data: [-2012,16576,-1989,-2594,-485,1136,-1590,-4903],
  //       color: '#0099ff',
  //     },
  //   ]),
  //     (this.schart = {
  //       height: 350,
  //       type: 'bar',
  //       zoom: {
  //         enabled: false,
  //       },
  //     }),
  //     (this.strock = {
  //       curve: 'straight',
  //       dashArray: [0, 3, 6],
  //       width: 1,
  //     }),
  //     (this.title = {
  //       text: 'Aggregate USD Position (trieu $)',
  //       style:{
  //         fontFamily:'Roboto'
  //       }
  //     }),
  //     (this.xaxis = {
  //       sorted:true,
  //       categories: ['CAD','EUR','GBP','AUD','NZD','MXM','CHF','JPY'],
  //       labels:{
  //         show:true,
  //       }
  //     }),
  //     // (this.usd_yaxis= {
  //     //   min: 0,
  //     //   max: 50000,
  //     // }),
  //     (this.dataLabels = {
  //       enabled: false,
  //     });
  // }
}
