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
import { PopularNewsComponent } from './components/popular-news/popular-news.component';
import { TopEaComponent } from './components/top-ea/top-ea.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChartFedComponent } from './components/chart-fed/chart-fed.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartCotComponent } from './components/chart-cot/chart-cot.component';
import { OpinionComponent } from './components/opinion/opinion.component';
import { HttpClientModule } from '@angular/common/http';
import { BankRateComponent } from './components/bank-rate/bank-rate.component';
import { WebsocketService } from './websocket.service';
import { HomeCotDataComponent } from './components/home-cot-data/home-cot-data.component';
import { CotCftcComponent } from './cot-cftc/cot-cftc.component';
import { ExpertIndicatorComponent } from './expert-indicator/expert-indicator.component';
import { IndicatorsComponent } from './components/indicators/indicators.component';
import { CommonNewsComponent } from './common-news/common-news.component';
import { FastNewFullComponent } from './components/fast-new-full/fast-new-full.component';
import { NewDetailComponent } from './new-detail/new-detail.component';
import { Websocket2 } from './socket2.service';
import { EconomicCalendarComponent } from './components/economic-calendar/economic-calendar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    ChartCotComponent,
    OpinionComponent,
    BankRateComponent,
    HomeCotDataComponent,
    CotCftcComponent,
    ExpertIndicatorComponent,
    IndicatorsComponent,
    CommonNewsComponent,
    FastNewFullComponent,
    NewDetailComponent,
    EconomicCalendarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    NgApexchartsModule,
    HttpClientModule,
  ],
  providers: [WebsocketService, Websocket2],
  bootstrap: [AppComponent]
})
export class AppModule { }
