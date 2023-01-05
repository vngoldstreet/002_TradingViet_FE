import { Component, OnInit } from '@angular/core';
import { ExpertAdvisor, News } from 'src/app/interface';
import { WebsocketService } from 'src/app/websocket.service';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.css']
})
export class IndicatorsComponent implements OnInit {

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
