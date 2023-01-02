import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FedWatch, ImageShows } from 'src/app/interface';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexLegend
} from 'ng-apexcharts';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
  selector: 'app-chart-fed',
  templateUrl: './chart-fed.component.html',
  styleUrls: ['./chart-fed.component.css'],
})

export class ChartFedComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  public chartfed: Partial<ChartOptions> | any;
  public chart_yeild: Partial<ChartOptions> | any;
  localurl: string = location.origin;
  datas !: FedWatch

  constructor(private http: HttpClient) {
    this.http.get<any>(environment.apiURL + environment.getFedWatch).subscribe(res => {
      this.datas = res.data
      // console.log(this.datas)
      this.chartfed = {
        series: [
          {
            name: 'Hôm nay',
            data: this.datas.now,
            color: '#003399',
          },
          {
            name: '1 ngày trước',
            data: this.datas.oneday,
            color: '#1a66ff',
          },
          {
            name: '1 tuần trước',
            data: this.datas.oneweek,
            color: '#6699ff',
          },
          {
            name: '1 tháng trước',
            data: this.datas.onemonth,
            color: '#b3ccff',
          },
        ],
        chart: {
          height: 350,
          type: 'bar',
        },
        title: {
          text: this.datas.current,
          style: {
            fontFamily: 'Roboto'
          }
        },
        xaxis: {
          sorted: true,
          categories: this.datas.categories,
          labels: {
            show: true,
          },
        },
        dataLabels: {
          enabled: true,
          textAnchor: "middle"
        },
        legend: {
          show: false
        }
      };
    }, error => {
      console.log(error)
    })
  }

  ngOnInit(): void {

  }

  image: ImageShows = {
    title: 'Fed watch dot plot',
    src: 'assets/blog/fed.png',
  };
}
