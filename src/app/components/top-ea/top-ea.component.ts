import { Component, OnInit } from '@angular/core';
import { ExpertAdvisor, News } from 'src/app/interface';
import { WebsocketService } from 'src/app/websocket.service';

@Component({
  selector: 'app-top-ea',
  templateUrl: './top-ea.component.html',
  styleUrls: ['./top-ea.component.css']
})
export class TopEaComponent implements OnInit {

  constructor(private webSocketService: WebsocketService) { }

  ngOnInit(): void {
    this.getPrices()
  }

  getPrices() {
    let url = "ws://localhost:8080/ws"
    this.webSocketService.connect(url)
      .subscribe(evt => {
        let jsonObj = JSON.parse(evt.data)
        // console.log(jsonObj)
        this.robots = jsonObj
      });
  }

  robots: Array<ExpertAdvisor> = []

}
