import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BankRates } from 'src/app/interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bank-rate',
  templateUrl: './bank-rate.component.html',
  styleUrls: ['./bank-rate.component.css']
})
export class BankRateComponent implements OnInit {

  public datas !: Array<BankRates>

  constructor(http: HttpClient) {
    http.get<any>(environment.apiURL + environment.getBankRate).subscribe(res => {
      this.datas = res.data
      // console.log(this.datas)
    }, error => {
      console.log(error)
    })
  }

  ngOnInit(): void {
  }

}
