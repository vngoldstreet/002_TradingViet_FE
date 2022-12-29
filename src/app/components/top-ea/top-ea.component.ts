import { Component, OnInit } from '@angular/core';
import { ExpertAdvisor, News } from 'src/app/interface';

@Component({
  selector: 'app-top-ea',
  templateUrl: './top-ea.component.html',
  styleUrls: ['./top-ea.component.css']
})
export class TopEaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  robots : Array<ExpertAdvisor> = [
    {
      status: true,
      name:"001_AUDNZD_Hedging",
      balance:1000,
      equity:1150.21,
      profit:124.45,
      live_profit:-5.35,
    },
    {
      status: false,
      name:"002_NZDAUD_Hedging",
      balance:1000,
      equity:1150.21,
      profit:124.45,
      live_profit:5.35,
    },
    {
      status: true,
      name:"001_AUDNZD_Hedging",
      balance:1000,
      equity:1150.21,
      profit:124.45,
      live_profit:-5.35,
    },
    {
      status: false,
      name:"002_NZDAUD_Hedging",
      balance:1000,
      equity:1150.21,
      profit:124.45,
      live_profit:-5.35,
    },
    {
      status: false,
      name:"002_NZDAUD_Hedging",
      balance:1000,
      equity:1150.21,
      profit:124.45,
      live_profit:-5.35,
    },
  ]
}
