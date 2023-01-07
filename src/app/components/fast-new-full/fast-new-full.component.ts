import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Contents, News } from 'src/app/interface';
import { Websocket2 } from 'src/app/socket2.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fast-new-full',
  templateUrl: './fast-new-full.component.html',
  styleUrls: ['./fast-new-full.component.css']
})
export class FastNewFullComponent implements OnInit {

  constructor(private webSocketService: Websocket2, private http: HttpClient) {
    let url = environment.apiNews
    this.webSocketService.connect(url)
      .subscribe(evt => {
        let jsonObj = JSON.parse(evt.data)
        // console.log(jsonObj)
        this.datas = jsonObj.FastNews
        this.time_stamp = new Date().toString()
      });
  }

  time_stamp !: string
  ngOnInit(): void {
    // this.http.get<any>("https://portal-content.tradingviet.com/public/update?limit=10").subscribe()
  }

  datas !: Array<Contents>
}
