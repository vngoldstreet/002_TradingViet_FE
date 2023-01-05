import { Component } from '@angular/core';
import { MetaService } from './metaset.service';

declare var $ : any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '001_tradingviet';
  constructor(private meta : MetaService) { }
  ngOnInit(): void {
    this.meta.updateTitle();
  }
  
  
}
