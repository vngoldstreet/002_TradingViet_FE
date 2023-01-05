import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Contents, Previews } from '../interface';

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.component.html',
  styleUrls: ['./new-detail.component.css'],
})
export class NewDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private titleService: Title,
    private metaTag: Meta
  ) {}

  ngOnInit(): void {
    this.getDetails();
    this.onLoadDatas();
  }

  data: Contents = {
    title: '',
    descrip: '',
    image: '',
    url: '',
    content: '',
    created_at: '',
    type: '',
    viewer: '',
    keyword: '',
  };

  apiUrl: string = environment.apiUrlG + environment.apiGetImage;
  loading: boolean = false;
  getDetails(): any {
    let urlres = this.route.snapshot.paramMap.get('url');
    var re = /tin-tuc/gi;
    var str = String(urlres);
    str.replace(re, '');
    if (urlres) {
      let urlQuerry = environment.apiUrlG + '/' + urlres;
      this.http.get<any>(urlQuerry).subscribe(
        (data) => {
          this.loading = true;
          this.data = data.data;
          this.titleService.setTitle(this.data.title + ' - TradingViet');
          this.metaTag.updateTag({
            name: 'title',
            content: 'TradingViet - ' + this.data.title,
          });
          this.metaTag.updateTag({
            name: 'description',
            content: this.data.descrip,
          });
          this.metaTag.updateTag({
            name: 'keywords',
            content: this.data.keyword,
          });
          this.metaTag.updateTag({
            property: 'og:description',
            content: this.data.descrip,
          });
          this.metaTag.updateTag({
            property: 'og:title',
            content: 'TradingViet - ' + this.data.title,
          });
          this.metaTag.updateTag({
            property: 'og:image',
            content: this.apiUrl + this.data.url,
          });
          this.metaTag.updateTag({
            property: 'og:image:alt',
            content: this.data.title,
          });
          this.metaTag.updateTag({
            property: 'og:url',
            content: 'https://tradingviet.com' + this.router.url,
          });
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  type: string = 'popular-news';
  length: number = 6;
  data_mores!: Array<Previews>;

  onLoadDatas() {
    let url =
      environment.apiUrlG +
      environment.apiGetListData +
      '?owner=tradingviet&type=' +
      this.type +
      '&length=' +
      this.length;
    this.http.get<any>(url).subscribe(
      (data) => {
        this.data_mores = data.data;
      },
      (err) => {
        console.log(err);
      }
    );

    let url2 =
      environment.apiUrlG +
      environment.apiGetListData +
      '?owner=bacsiungthu&type=' +
      this.type +
      '&length=' +
      this.length;
    this.http.get<any>(url2).subscribe(
      (data) => {
        this.hot_news = data.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onLoadmore() {
    this.length += 8;
    this.onLoadDatas();
  }

  hot_news!: Array<Previews>;
}
