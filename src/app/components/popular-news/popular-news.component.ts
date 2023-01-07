import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contents, PopularNews } from 'src/app/interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-popular-news',
  templateUrl: './popular-news.component.html',
  styleUrls: ['./popular-news.component.css'],
})
export class PopularNewsComponent implements OnInit {
  data_1: PopularNews = {
    title: '',
    descrip: '',
    image: '',
    url: '',
    content: '',
    created_at: '',
    type: '',
    viewer: '',
    keyword: '',
    deleted: false
  };

  data_2: PopularNews = {
    title: '',
    descrip: '',
    image: '',
    url: '',
    content: '',
    created_at: '',
    type: '',
    viewer: '',
    keyword: '',
    deleted: false
  };

  data_3: PopularNews = {
    title: '',
    descrip: '',
    image: '',
    url: '',
    content: '',
    created_at: '',
    type: '',
    viewer: '',
    keyword: '',
    deleted: false
  };
  data_4: PopularNews = {
    title: '',
    descrip: '',
    image: '',
    url: '',
    content: '',
    created_at: '',
    type: '',
    viewer: '',
    keyword: '',
    deleted: false
  };

  url_image: string = environment.apiUrlG + environment.apiGetImage;

  constructor(private http: HttpClient, private router: Router) {
    http.get<any>(environment.apiUrlG + environment.apiGetListData + '?owner=tradingviet&type=popular-news&length=4').subscribe(
      (res) => {
        this.data_1 = res.data[0];
        this.data_2 = res.data[1];
        this.data_3 = res.data[2];
        this.data_4 = res.data[3];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    // console.log(this.url_image)
  }


}
