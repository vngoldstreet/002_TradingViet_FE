import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
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

  constructor(private http: HttpClient) {
    http.get<any>(environment.apiURL + environment.getChartDatas).subscribe(
      (res) => {
        this.datas = res.data;
        this.chartGoldOptions = {
          series: [
            {
              name: 'Long Position',
              data: this.datas[0].long_change,
              color: '#0099ff',
              type: 'column'
            },
            {
              name: 'Short Position',
              data: this.datas[0].short_change,
              color: '#ff3333',
              type: 'column'
            },
            {
              name: 'Total Long Position',
              data: this.datas[0].long_all,
              color: '#0099ff',
              type: 'line'
            },
            {
              name: 'Total Short Position',
              data: this.datas[0].short_all,
              color: '#ff3333',
              type: 'line'
            },
          ],
          chart: {

          },
          strock: {
            curve: 'stepline',
            width: [1, 1, 2, 2],
          },
          title: {
            text: this.datas[0].name + " Updated: " + this.datas[0].categories[this.datas[0].categories.length - 1],
            style: {
              fontFamily: 'Roboto',
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

        this.chartCOTEUR = {
          series: [
            {
              name: 'Long Position',
              data: this.datas[1].long_change,
              color: '#0099ff',
              type: 'column'
            },
            {
              name: 'Short Position',
              data: this.datas[1].short_change,
              color: '#ff3333',
              type: 'column'
            },
            {
              name: 'Total Long Position',
              data: this.datas[1].long_all,
              color: '#0099ff',
              type: 'line'
            },
            {
              name: 'Total Short Position',
              data: this.datas[1].short_all,
              color: '#ff3333',
              type: 'line'
            },
          ],
          chart: {

          },
          strock: {
            curve: 'stepline',
            width: [1, 1, 2, 2],
          },
          title: {
            text: this.datas[1].name + " Updated: " + this.datas[1].categories[this.datas[1].categories.length - 1],
            style: {
              fontFamily: 'Roboto',
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
              data: this.datas[2].long_change,
              color: '#0099ff',
              type: 'column'
            },
            {
              name: 'Short Position',
              data: this.datas[2].short_change,
              color: '#ff3333',
              type: 'column'
            },
            {
              name: 'Total Long Position',
              data: this.datas[2].long_all,
              color: '#0099ff',
              type: 'line'
            },
            {
              name: 'Total Short Position',
              data: this.datas[2].short_all,
              color: '#ff3333',
              type: 'line'
            },
          ],
          chart: {

          },
          strock: {
            curve: 'stepline',
            width: [1, 1, 2, 2],
          },
          title: {
            text: this.datas[2].name + " Updated: " + this.datas[2].categories[this.datas[2].categories.length - 1],
            style: {
              fontFamily: 'Roboto',
            },
          },
          xaxis: {
            sorted: true,
            categories: this.datas[2].categories,
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
              data: this.datas[3].long_change,
              color: '#0099ff',
              type: 'column'
            },
            {
              name: 'Short Position',
              data: this.datas[3].short_change,
              color: '#ff3333',
              type: 'column'
            },
            {
              name: 'Total Long Position',
              data: this.datas[3].long_all,
              color: '#0099ff',
              type: 'line'
            },
            {
              name: 'Total Short Position',
              data: this.datas[3].short_all,
              color: '#ff3333',
              type: 'line'
            },
          ],
          chart: {

          },
          strock: {
            curve: 'stepline',
            width: [1, 1, 2, 2],
          },
          title: {
            text: this.datas[3].name + " Updated: " + this.datas[3].categories[this.datas[3].categories.length - 1],
            style: {
              fontFamily: 'Roboto',
            },
          },
          xaxis: {
            sorted: true,
            categories: this.datas[3].categories,
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
              data: this.datas[4].long_change,
              color: '#0099ff',
              type: 'column'
            },
            {
              name: 'Short Position',
              data: this.datas[4].short_change,
              color: '#ff3333',
              type: 'column'
            },
            {
              name: 'Total Long Position',
              data: this.datas[4].long_all,
              color: '#0099ff',
              type: 'line'
            },
            {
              name: 'Total Short Position',
              data: this.datas[4].short_all,
              color: '#ff3333',
              type: 'line'
            },
          ],
          chart: {

          },
          strock: {
            curve: 'stepline',
            width: [1, 1, 2, 2],
          },
          title: {
            text: this.datas[4].name + " Updated: " + this.datas[4].categories[this.datas[4].categories.length - 1],
            style: {
              fontFamily: 'Roboto',
            },
          },
          xaxis: {
            sorted: true,
            categories: this.datas[4].categories,
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
              data: this.datas[5].long_change,
              color: '#0099ff',
              type: 'column'
            },
            {
              name: 'Short Position',
              data: this.datas[5].short_change,
              color: '#ff3333',
              type: 'column'
            },
            {
              name: 'Total Long Position',
              data: this.datas[5].long_all,
              color: '#0099ff',
              type: 'line'
            },
            {
              name: 'Total Short Position',
              data: this.datas[5].short_all,
              color: '#ff3333',
              type: 'line'
            },
          ],
          chart: {

          },
          strock: {
            curve: 'stepline',
            width: [1, 1, 2, 2],
          },
          title: {
            text: this.datas[5].name + " Updated: " + this.datas[5].categories[this.datas[5].categories.length - 1],
            style: {
              fontFamily: 'Roboto',
            },
          },
          xaxis: {
            sorted: true,
            categories: this.datas[5].categories,
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
              data: this.datas[6].long_change,
              color: '#0099ff',
              type: 'column'
            },
            {
              name: 'Short Position',
              data: this.datas[6].short_change,
              color: '#ff3333',
              type: 'column'
            },
            {
              name: 'Total Long Position',
              data: this.datas[6].long_all,
              color: '#0099ff',
              type: 'line'
            },
            {
              name: 'Total Short Position',
              data: this.datas[6].short_all,
              color: '#ff3333',
              type: 'line'
            },
          ],
          chart: {

          },
          strock: {
            curve: 'stepline',
            width: [1, 1, 2, 2],
          },
          title: {
            text: this.datas[6].name + " Updated: " + this.datas[6].categories[this.datas[6].categories.length - 1],
            style: {
              fontFamily: 'Roboto',
            },
          },
          xaxis: {
            sorted: true,
            categories: this.datas[6].categories,
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
              data: this.datas[8].long_change,
              color: '#0099ff',
              type: 'column'
            },
            {
              name: 'Short Position',
              data: this.datas[8].short_change,
              color: '#ff3333',
              type: 'column'
            },
            {
              name: 'Total Long Position',
              data: this.datas[8].long_all,
              color: '#0099ff',
              type: 'line'
            },
            {
              name: 'Total Short Position',
              data: this.datas[8].short_all,
              color: '#ff3333',
              type: 'line'
            },
          ],
          chart: {

          },
          strock: {
            curve: 'stepline',
            width: [1, 1, 2, 2],
          },
          title: {
            text: this.datas[8].name + " Updated: " + this.datas[8].categories[this.datas[8].categories.length - 1],
            style: {
              fontFamily: 'Roboto',
            },
          },
          xaxis: {
            sorted: true,
            categories: this.datas[8].categories,
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
              data: this.datas[7].long_change,
              color: '#0099ff',
              type: 'column'
            },
            {
              name: 'Short Position',
              data: this.datas[7].short_change,
              color: '#ff3333',
              type: 'column'
            },
            {
              name: 'Total Long Position',
              data: this.datas[7].long_all,
              color: '#0099ff',
              type: 'line'
            },
            {
              name: 'Total Short Position',
              data: this.datas[7].short_all,
              color: '#ff3333',
              type: 'line'
            },
          ],
          chart: {

          },
          strock: {
            curve: 'stepline',
            width: [1, 1, 2, 2],
          },
          title: {
            text: this.datas[7].name + " Updated: " + this.datas[7].categories[this.datas[7].categories.length - 1],
            style: {
              fontFamily: 'Roboto',
            },
          },
          xaxis: {
            sorted: true,
            categories: this.datas[7].categories,
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
              data: this.datas[9].long_change,
              color: '#0099ff',
              type: 'column'
            },
            {
              name: 'Short Position',
              data: this.datas[9].short_change,
              color: '#ff3333',
              type: 'column'
            },
            {
              name: 'Total Long Position',
              data: this.datas[9].long_all,
              color: '#0099ff',
              type: 'line'
            },
            {
              name: 'Total Short Position',
              data: this.datas[9].short_all,
              color: '#ff3333',
              type: 'line'
            },
          ],
          chart: {

          },
          strock: {
            curve: 'stepline',
            width: [1, 1, 2, 2],
          },
          title: {
            text: this.datas[9].name + " Updated: " + this.datas[9].categories[this.datas[9].categories.length - 1],
            style: {
              fontFamily: 'Roboto',
            },
          },
          xaxis: {
            sorted: true,
            categories: this.datas[9].categories,
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
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void { }
}
