import { HttpClient } from '@angular/common/http';
import { Component, Inject, Injectable, OnInit, Renderer2, ViewChild } from '@angular/core';
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
  selector: 'app-chart-cot',
  templateUrl: './chart-cot.component.html',
  styleUrls: ['./chart-cot.component.css'],
})

@Injectable()
export class ChartCotComponent implements OnInit {

  public chartGoldOptions: Partial<ChartOptions> | any;
  public chartUSDOptions: Partial<ChartOptions> | any;
  public chartUsdWithOthers: Partial<ChartOptions> | any;
  public chartCOTEUR: Partial<ChartOptions> | any;
  public chartCOTGBP: Partial<ChartOptions> | any;
  public chartCOTAUD: Partial<ChartOptions> | any;
  public chartCOTJPY: Partial<ChartOptions> | any;
  public chartCOTCAD: Partial<ChartOptions> | any;
  public chartCOTCHF: Partial<ChartOptions> | any;
  public chartCOTUSD: Partial<ChartOptions> | any;
  public chartCOTNZD: Partial<ChartOptions> | any;
  public chartCOTVIX: Partial<ChartOptions> | any;

  public datas: Array<ChartDatas> = [];
  time_update !: string
  constructor(
    private http: HttpClient,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) { }

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
            categories: this.datas[0].categories.slice(start,end),
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

        this.chartCOTEUR = {
          series: [
            {
              name: 'Long Position',
              data: this.datas[1].long_change.slice(start,end),
              color: '#0099ff',
              type: 'column'
            },
            {
              name: 'Short Position',
              data: this.datas[1].short_change.slice(start,end),
              color: '#ff3333',
              type: 'column'
            },
            {
              name: 'Total Long Position',
              data: this.datas[1].long_all.slice(start,end),
              color: '#0099ff',
              type: 'line'
            },
            {
              name: 'Total Short Position',
              data: this.datas[1].short_all.slice(start,end),
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
            text: this.datas[1].name,
            style: {
              fontFamily: 'Roboto',
              fontSize: '10',
            },
          },
          xaxis: {
            sorted: true,
            categories: this.datas[1].categories,
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

        this.chartCOTGBP = {
          series: [
            {
              name: 'Long Position',
              data: this.datas[2].long_change.slice(start,end),
              color: '#0099ff',
              type: 'column'
            },
            {
              name: 'Short Position',
              data: this.datas[2].short_change.slice(start,end),
              color: '#ff3333',
              type: 'column'
            },
            {
              name: 'Total Long Position',
              data: this.datas[2].long_all.slice(start,end),
              color: '#0099ff',
              type: 'line'
            },
            {
              name: 'Total Short Position',
              data: this.datas[2].short_all.slice(start,end),
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
            text: this.datas[2].name,
            style: {
              fontFamily: 'Roboto',
              fontSize: '10',
            },
          },
          xaxis: {
            sorted: true,
            categories: this.datas[2].categories.slice(start,end),
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

        this.chartCOTAUD = {
          series: [
            {
              name: 'Long Position',
              data: this.datas[3].long_change.slice(start,end),
              color: '#0099ff',
              type: 'column'
            },
            {
              name: 'Short Position',
              data: this.datas[3].short_change.slice(start,end),
              color: '#ff3333',
              type: 'column'
            },
            {
              name: 'Total Long Position',
              data: this.datas[3].long_all.slice(start,end),
              color: '#0099ff',
              type: 'line'
            },
            {
              name: 'Total Short Position',
              data: this.datas[3].short_all.slice(start,end),
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
            text: this.datas[3].name,
            style: {
              fontFamily: 'Roboto',
              fontSize: '10',
            },
          },
          xaxis: {
            sorted: true,
            categories: this.datas[3].categories.slice(start,end),
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

        this.chartCOTJPY = {
          series: [
            {
              name: 'Long Position',
              data: this.datas[4].long_change.slice(start,end),
              color: '#0099ff',
              type: 'column'
            },
            {
              name: 'Short Position',
              data: this.datas[4].short_change.slice(start,end),
              color: '#ff3333',
              type: 'column'
            },
            {
              name: 'Total Long Position',
              data: this.datas[4].long_all.slice(start,end),
              color: '#0099ff',
              type: 'line'
            },
            {
              name: 'Total Short Position',
              data: this.datas[4].short_all.slice(start,end),
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
            text: this.datas[4].name,
            style: {
              fontFamily: 'Roboto',
              fontSize: '10',
            },
          },
          xaxis: {
            sorted: true,
            categories: this.datas[4].categories.slice(start,end),
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

        this.chartCOTCAD = {
          series: [
            {
              name: 'Long Position',
              data: this.datas[5].long_change.slice(start,end),
              color: '#0099ff',
              type: 'column'
            },
            {
              name: 'Short Position',
              data: this.datas[5].short_change.slice(start,end),
              color: '#ff3333',
              type: 'column'
            },
            {
              name: 'Total Long Position',
              data: this.datas[5].long_all.slice(start,end),
              color: '#0099ff',
              type: 'line'
            },
            {
              name: 'Total Short Position',
              data: this.datas[5].short_all.slice(start,end),
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
            text: this.datas[5].name,
            style: {
              fontFamily: 'Roboto',
              fontSize: '10',
            },
          },
          xaxis: {
            sorted: true,
            categories: this.datas[5].categories.slice(start,end),
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

        this.chartCOTCHF = {
          series: [
            {
              name: 'Long Position',
              data: this.datas[6].long_change.slice(start,end),
              color: '#0099ff',
              type: 'column'
            },
            {
              name: 'Short Position',
              data: this.datas[6].short_change.slice(start,end),
              color: '#ff3333',
              type: 'column'
            },
            {
              name: 'Total Long Position',
              data: this.datas[6].long_all.slice(start,end),
              color: '#0099ff',
              type: 'line'
            },
            {
              name: 'Total Short Position',
              data: this.datas[6].short_all.slice(start,end),
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
            text: this.datas[6].name,
            style: {
              fontFamily: 'Roboto',
              fontSize: '10',
            },
          },
          xaxis: {
            sorted: true,
            categories: this.datas[6].categories.slice(start,end),
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

        this.chartCOTNZD = {
          series: [
            {
              name: 'Long Position',
              data: this.datas[7].long_change.slice(start,end),
              color: '#0099ff',
              type: 'column'
            },
            {
              name: 'Short Position',
              data: this.datas[7].short_change.slice(start,end),
              color: '#ff3333',
              type: 'column'
            },
            {
              name: 'Total Long Position',
              data: this.datas[7].long_all.slice(start,end),
              color: '#0099ff',
              type: 'line'
            },
            {
              name: 'Total Short Position',
              data: this.datas[7].short_all.slice(start,end),
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
            text: this.datas[7].name,
            style: {
              fontFamily: 'Roboto',
              fontSize: '10',
            },
          },
          xaxis: {
            sorted: true,
            categories: this.datas[7].categories.slice(start,end),
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
        var options_chartCOTEUR = ${JSON.stringify(this.chartCOTEUR)}
        var options_chartCOTGBP = ${JSON.stringify(this.chartCOTGBP)}
        var options_chartCOTAUD = ${JSON.stringify(this.chartCOTAUD)}
        var options_chartCOTJPY = ${JSON.stringify(this.chartCOTJPY)}
        var options_chartCOTCAD = ${JSON.stringify(this.chartCOTCAD)}
        var options_chartCOTCHF = ${JSON.stringify(this.chartCOTCHF)}
        var options_chartCOTUSD = ${JSON.stringify(this.chartCOTUSD)}
        var options_chartCOTNZD = ${JSON.stringify(this.chartCOTNZD)}
        var options_chartCOTVIX = ${JSON.stringify(this.chartCOTVIX)}

        var chartGoldOptions = new ApexCharts(document.querySelector("#chartGoldOptions"), options_chartGoldOptions);
        var chartCOTEUR = new ApexCharts(document.querySelector("#chartCOTEUR"), options_chartCOTEUR);
        var chartCOTGBP = new ApexCharts(document.querySelector("#chartCOTGBP"), options_chartCOTGBP);
        var chartCOTAUD = new ApexCharts(document.querySelector("#chartCOTAUD"), options_chartCOTAUD);
        var chartCOTJPY = new ApexCharts(document.querySelector("#chartCOTJPY"), options_chartCOTJPY);
        var chartCOTCAD = new ApexCharts(document.querySelector("#chartCOTCAD"), options_chartCOTCAD);
        var chartCOTCHF = new ApexCharts(document.querySelector("#chartCOTCHF"), options_chartCOTCHF);
        var chartCOTUSD = new ApexCharts(document.querySelector("#chartCOTUSD"), options_chartCOTUSD);
        var chartCOTNZD = new ApexCharts(document.querySelector("#chartCOTNZD"), options_chartCOTNZD);
        var chartCOTVIX = new ApexCharts(document.querySelector("#chartCOTVIX"), options_chartCOTVIX);
        chartGoldOptions.render();

        chartCOTEUR.render();
        chartCOTGBP.render();
        chartCOTAUD.render();
        chartCOTJPY.render();
        chartCOTCAD.render();
        chartCOTCHF.render();
        chartCOTUSD.render();
        chartCOTNZD.render();
        chartCOTVIX.render();
        `
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
