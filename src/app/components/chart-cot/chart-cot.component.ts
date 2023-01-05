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
  selector: 'app-chart-cot',
  templateUrl: './chart-cot.component.html',
  styleUrls: ['./chart-cot.component.css'],
})
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
            width: [1, 1,2,2],
          },
          title: {
            text: this.datas[0].name,
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

        // this.chartUSDOptions = {
        //   series: [
        //     {
        //       name: 'USD Position',
        //       data: this.datas[1].long,
        //       color: '#8000ff',
        //     },
        //   ],
        //   chart: {
        //     height: 350,
        //     type: 'bar',
        //     zoom: {
        //       enabled: false,
        //     },
        //   },
        //   strock: {
        //     curve: 'straight',
        //     width: 1,
        //   },
        //   title: {
        //     text: this.datas[1].title,
        //     style: {
        //       fontFamily: 'Roboto',
        //     },
        //   },
        //   xaxis: {
        //     sorted: true,
        //     categories: this.datas[1].categories,
        //     labels: {
        //       show: true,
        //       rotateAlways: false,
        //       style: {
        //         fontSize: '10',
        //       },
        //     },
        //   },
        //   dataLabels: {
        //     enabled: false,
        //   },
        //   legend:{
        //     show: false
        //   }
        // };

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
            width: [1, 1,2,2],
          },
          title: {
            text: this.datas[1].name,
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
            width: [1, 1,2,2],
          },
          title: {
            text: this.datas[2].name,
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
            width: [1, 1,2,2],
          },
          title: {
            text: 'COT-AUD',
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
            width: [1, 1,2,2],
          },
          title: {
            text: this.datas[4].name,
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
            width: [1, 1,2,2],
          },
          title: {
            text: this.datas[5].name,
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
            width: [1, 1,2,2],
          },
          title: {
            text: this.datas[6].name,
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
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {}
}
