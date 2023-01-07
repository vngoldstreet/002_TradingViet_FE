import { Component, OnInit } from '@angular/core';
import { MetalMines } from 'src/app/interface';

@Component({
  selector: 'app-economic-calendar',
  templateUrl: './economic-calendar.component.html',
  styleUrls: ['./economic-calendar.component.css']
})
export class EconomicCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  metalmines: Array<MetalMines> = []
}
