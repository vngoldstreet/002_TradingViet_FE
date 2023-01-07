import { Component, OnInit } from '@angular/core';
import { ExpertAdvisor, Indicator, News } from 'src/app/interface';
import { WebsocketService } from 'src/app/websocket.service';
import { environment } from 'src/environments/environment';

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
  time_stamp !: string
  getPrices() {
    let url = environment.apiRobot
    this.webSocketService.connect(url)
      .subscribe(evt => {
        // console.log(evt.data)
        let jsonObj = JSON.parse(evt.data)
        this.time_stamp = new Date().toString()
        this.robots = jsonObj.DataStreamEAs
        this.indicators = jsonObj.DataStreamIndis
      });
  }

  robots: Array<ExpertAdvisor> = []
  indicators: Array<Indicator> = []
}
