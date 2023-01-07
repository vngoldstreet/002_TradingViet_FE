import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ChartDatas } from 'src/app/interface';
import { environment } from 'src/environments/environment';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexYAxis,
  ApexDataLabels,
  ApexLegend,
  ApexStroke,
} from 'ng-apexcharts';
import { DOCUMENT } from '@angular/common';

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
  selector: 'app-home-cot-data',
  templateUrl: './home-cot-data.component.html',
  styleUrls: ['./home-cot-data.component.css']
})
export class HomeCotDataComponent implements OnInit {
  public chartGoldOptions: Partial<ChartOptions> | any;
  public chartCOTUSD: Partial<ChartOptions> | any;
  public chartCOTVIX: Partial<ChartOptions> | any;
  public datas: Array<ChartDatas> = [];
  constructor(private http: HttpClient,private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document) {
    
  }
  time_update !: string
  ngOnInit(): void {
    this.http.get<any>(environment.apiURL + environment.getChartDatas).subscribe(
      (res) => {
        this.datas = res.data;
        let start = this.datas[0].categories.length - 24
        let end = this.datas[0].categories.length
        this.time_update = this.datas[0].categories[this.datas[0].categories.length - 1]

        this.chartGoldOptions = {
          series: [
            {
              name: 'Long Position',
              data: this.datas[0].long_change.slice(start,end),
              color: '#0099ff',
              type: 'column'
            },
            {
              name: 'Short Position',
              data: this.datas[0].short_change.slice(start,end),
              color: '#ff3333',
              type: 'column'
            },
            {
              name: 'Total Long Position',
              data: this.datas[0].long_all.slice(start,end),
              color: '#0099ff',
              type: 'line'
            },
            {
              name: 'Total Short Position',
              data: this.datas[0].short_all.slice(start,end),
              color: '#ff3333',
              type: 'line'
            },
          ],
          chart: {

          },
          stroke: {
            curve: 'stepline',
            width: [1, 1, 2, 2],
          },
          title: {
            text: this.datas[0].name,
            style: {
              fontFamily: 'Roboto',
              fontSize: '10',
            },
          },
          xaxis: {
            sorted: true,
            categories: this.datas[0].categories,
            labels: {
              show: true,
              style: {
                fontSize: '10',
              }
            },
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: true,
          },
        };

        this.chartCOTUSD = {
          series: [
            {
              name: 'Long Position',
              data: this.datas[8].long_change.slice(start,end),
              color: '#0099ff',
              type: 'column'
            },
            {
              name: 'Short Position',
              data: this.datas[8].short_change.slice(start,end),
              color: '#ff3333',
              type: 'column'
            },
            {
              name: 'Total Long Position',
              data: this.datas[8].long_all.slice(start,end),
              color: '#0099ff',
              type: 'line'
            },
            {
              name: 'Total Short Position',
              data: this.datas[8].short_all.slice(start,end),
              color: '#ff3333',
              type: 'line'
            },
          ],
          chart: {

          },
          stroke: {
            curve: 'stepline',
            width: [1, 1, 2, 2],
          },
          title: {
            text: this.datas[8].name,
            style: {
              fontFamily: 'Roboto',
              fontSize: '10',
            },
          },
          xaxis: {
            sorted: true,
            categories: this.datas[8].categories.slice(start,end),
            labels: {
              show: true,
              style: {
                fontSize: '10',
              },
            },
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: true,
          },
        };

        this.chartCOTVIX = {
          series: [
            {
              name: 'Long Position',
              data: this.datas[9].long_change.slice(start,end),
              color: '#0099ff',
              type: 'column'
            },
            {
              name: 'Short Position',
              data: this.datas[9].short_change.slice(start,end),
              color: '#ff3333',
              type: 'column'
            },
            {
              name: 'Total Long Position',
              data: this.datas[9].long_all.slice(start,end),
              color: '#0099ff',
              type: 'line'
            },
            {
              name: 'Total Short Position',
              data: this.datas[9].short_all.slice(start,end),
              color: '#ff3333',
              type: 'line'
            },
          ],
          chart: {

          },
          stroke: {
            curve: 'stepline',
            width: [1, 1, 2, 2],
          },
          title: {
            text: this.datas[9].name,
            style: {
              fontFamily: 'Roboto',
              fontSize: '10',
            },
          },
          xaxis: {
            sorted: true,
            categories: this.datas[9].categories.slice(start,end),
            labels: {
              show: true,
              style: {
                fontSize: '10',
              },
            },
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: true,
          },
        };

        let script = this._renderer2.createElement('script');
        this._renderer2.appendChild(this._document.body, script);
        script.text = 
        `
        var options_chartGoldOptions = ${JSON.stringify(this.chartGoldOptions)}
        var options_chartCOTUSD = ${JSON.stringify(this.chartCOTUSD)}
        var options_chartCOTVIX = ${JSON.stringify(this.chartCOTVIX)}
  
        var chartGoldOptions = new ApexCharts(document.querySelector("#chartGoldOptions"), options_chartGoldOptions);
        var chartCOTUSD = new ApexCharts(document.querySelector("#chartCOTUSD"), options_chartCOTUSD);
        var chartCOTVIX = new ApexCharts(document.querySelector("#chartCOTVIX"), options_chartCOTVIX);
        
        chartGoldOptions.render();
        chartCOTUSD.render();
        chartCOTVIX.render();
        `
      },
      (error) => {
        console.log(error);
      }

    );
  }

}
