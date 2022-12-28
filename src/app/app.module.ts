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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    SliderComponent,
    ChatComponent,
    FastNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbPaginationModule, 
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
