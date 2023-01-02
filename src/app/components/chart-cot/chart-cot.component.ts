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
  ApexStroke
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

  public datas : Array<ChartDatas> = []

  constructor(private http: HttpClient) {
    
    http.get<any>(environment.apiURL+environment.getChartDatas).subscribe(res =>{
      this.datas = res.data
      // console.log(this.datas)
      this.chartGoldOptions = {
        series: [
          {
            name: 'Managed Money Long',
            data: this.datas[0].long,
            color: '#0099ff',
          },
          {
            name: 'Managed Money Short',
            data: this.datas[0].short,
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
          text: this.datas[0].title,
          style: {
            fontFamily: 'Roboto',
          },
        },
        xaxis: {
          sorted: true,
          categories: this.datas[0].categories,
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
            data: this.datas[1].long,
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
          text: this.datas[1].title,
          style: {
            fontFamily: 'Roboto',
          },
        },
        xaxis: {
          sorted: true,
          categories: this.datas[1].categories,
          labels: {
            show: true,
            rotateAlways: false,
            style: {
              fontSize: '10',
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
            data: this.datas[2].long,
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
          text: this.datas[2].title,
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
        legend:{
          show: false
        }
      };

      this.chartCOTEUR = {
        series: [
          {
            name: 'Managed Money Long',
            data: this.datas[3].long,
            color: '#0099ff',
          },
          {
            name: 'Managed Money Short',
            data: this.datas[3].short,
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
          categories: this.datas[3].categories,
          labels: {
            show: true,
            style:{
              fontSize:'10',
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
            data: this.datas[4].long,
            color: '#0099ff',
          },
          {
            name: 'Managed Money Short',
            data: this.datas[4].short,
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
          categories: this.datas[4].categories,
          labels: {
            show: true,
            style:{
              fontSize:'10',
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
            data: this.datas[5].long,
            color: '#0099ff',
          },
          {
            name: 'Managed Money Short',
            data: this.datas[5].short,
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
          categories: this.datas[5].categories,
          labels: {
            show: true,
            style:{
              fontSize:'10',
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
            data: this.datas[6].long,
            color: '#0099ff',
          },
          {
            name: 'Managed Money Short',
            data: this.datas[6].short,
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
          categories: this.datas[6].categories,
          labels: {
            show: true,
            style:{
              fontSize:'10',
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
            data: this.datas[7].long,
            color: '#0099ff',
          },
          {
            name: 'Managed Money Short',
            data: this.datas[7].short,
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
          categories: this.datas[7].categories,
          labels: {
            show: true,
            style:{
              fontSize:'10',
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
            data: this.datas[8].long,
            color: '#0099ff',
          },
          {
            name: 'Managed Money Short',
            data: this.datas[8].short,
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
          categories: this.datas[8].categories,
          labels: {
            show: true,
            style:{
              fontSize:'10',
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

    },error => {
      console.log(error)
    })
  }

  ngOnInit(): void {}
}
