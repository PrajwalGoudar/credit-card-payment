import { BadInput } from './../common/errors/bad-input';
import { CardPayment } from './../models/card-payment.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

import { AppError } from '../common/errors/app-error';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardPaymentService {
 
  // Input your url here, this dummy url always returns a success message
  private url = "https://asia-south1-planit-284018.cloudfunctions.net/payment-dummy";

  constructor(private http: HttpClient) { }

  postCardPayment(paymentDetails: CardPayment){
    return this.http.post(this.url,paymentDetails)
    .pipe(
      catchError(errorResponse => {
        const err = <HttpErrorResponse>errorResponse;
        console.log(err);
        if(err.status === 400){
          return throwError(new BadInput(err));
        } else {
          return throwError(new AppError(err)); 
        }
      })
    );
  }

}
