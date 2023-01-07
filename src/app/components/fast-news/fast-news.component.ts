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
        // console.log(jsonObj)
        this.data_currents = jsonObj.FastNews
        this.time_stamp = new Date().toString()
        if (this.datas[0].title != this.data_currents[0].title) {
          this.datas = this.data_currents
        }
      });
  }

  time_stamp !: string
  ngOnInit(): void {
    this.datas = this.data_currents
  }

  datas!: Array<Contents>
  data_currents: Array<Contents> = [{
    title: "",
    descrip: "",
    image: "",
    friendly_url: "",
    content: "",
    created_at: "",
    type: "",
    viewer: "",
    keyword: "",
    deleted: false
  },];

  SetString(des: string) {
    let text = des.length > 320 ? '...' : ''
    return des.slice(0, 320) + text
  }
}
