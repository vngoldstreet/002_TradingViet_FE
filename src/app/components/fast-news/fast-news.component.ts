import { Component, OnInit } from '@angular/core';
import { Contents, News } from 'src/app/interface';
import { Websocket2 } from 'src/app/socket2.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fast-news',
  templateUrl: './fast-news.component.html',
  styleUrls: ['./fast-news.component.css']
})
export class FastNewsComponent implements OnInit {
  constructor(private webSocketService: Websocket2) {
    let url = environment.apiNews
    this.webSocketService.connect(url)
      .subscribe(evt => {
        let jsonObj = JSON.parse(evt.data)
        this.data_currents=jsonObj
        if (this.datas[0].created_at != this.data_currents[0].created_at){
          this.datas = jsonObj
        }
        this.time_stamp = new Date().toString()
        localStorage.setItem("content",JSON.stringify(this.datas))
      });
   }
  time_stamp !: string
  ngOnInit(): void {
    this.datas = JSON.parse(localStorage.getItem("content") || '{}')
    this.time_stamp = this.datas[0].created_at
  }

  datas !: Array<Contents>
  data_currents !: Array<Contents>
}
