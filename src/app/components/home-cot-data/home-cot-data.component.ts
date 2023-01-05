import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
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
  selector: 'app-home-cot-data',
  templateUrl: './home-cot-data.component.html',
  styleUrls: ['./home-cot-data.component.css']
})
export class HomeCotDataComponent implements OnInit {
  public chartGoldOptions: Partial<ChartOptions> | any;
  public chartCOTUSD: Partial<ChartOptions> | any;
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

  ngOnInit(): void {
  }

}
