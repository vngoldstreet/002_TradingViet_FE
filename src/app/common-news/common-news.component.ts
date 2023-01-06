import { Component, OnInit } from '@angular/core';
import { Contents } from '../interface';
import { Websocket2 } from '../socket2.service';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-common-news',
  templateUrl: './common-news.component.html',
  styleUrls: ['./common-news.component.css']
})
export class CommonNewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
}
