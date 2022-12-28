import { Component, OnInit } from '@angular/core';
import { Sliders } from 'src/app/interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }
  slider: Array<Sliders> = [
    {
      id: 0,
      image: "https://picsum.photos/seed/picsum/1600/300",
      title: "",
      descrip: ""
    },
    {
      id: 1,
      image: "https://picsum.photos/1600/300?grayscale",
      title: "",
      descrip: ""
    },
    {
      id: 2,
      image: "https://picsum.photos/1600/300?grayscale",
      title: "",
      descrip: ""
    }
  ]
  length !: number
  ngOnInit(): void {
    this.length = this.slider.length
  }

}
