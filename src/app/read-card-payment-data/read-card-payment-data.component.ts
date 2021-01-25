import { Observable } from 'rxjs';
import { CardPayment } from './../models/card-payment.model';
import { AppState } from './../app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-read-card-payment-data',
  templateUrl: './read-card-payment-data.component.html',
  styleUrls: ['./read-card-payment-data.component.css']
})
export class ReadCardPaymentDataComponent implements OnInit {

  cardPayments: Observable<CardPayment[]>;

  constructor(private store: Store<AppState>) {
   }

  ngOnInit(){
    this.cardPayments = this.store.select('cardPayment'); 
  }

}
