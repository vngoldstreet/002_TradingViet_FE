import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SliderComponent } from './components/slider/slider.component';
import { ChatComponent } from './components/chat/chat.component';
import { FastNewsComponent } from './components/fast-news/fast-news.component';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { PopularNewsComponent } from './components/popular-news/popular-news.component';
import { TopEaComponent } from './components/top-ea/top-ea.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChartFedComponent } from './components/chart-fed/chart-fed.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartCotComponent } from './components/chart-cot/chart-cot.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    SliderComponent,
    ChatComponent,
    FastNewsComponent,
    PopularNewsComponent,
    TopEaComponent,
    FooterComponent,
    ChartFedComponent,
    ChartCotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbPaginationModule, 
    NgbAlertModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
