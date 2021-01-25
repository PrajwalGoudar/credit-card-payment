import { DateValidators } from './../common/validators/date.validators';
import { AppState } from './../app.state';
import { CardPayment } from './../models/card-payment.model';
import { BadInput } from './../common/errors/bad-input';
import { AppError } from './../common/errors/app-error';
import {Store} from '@ngrx/store';
import * as CardPaymentActions from './../actions/card-payment.action';
import { CardPaymentService } from './../services/card-payment.service';
import { AmountValidators } from './../common/validators/amount.validators';
import { CVVValidators } from './../common/validators/cvv.validators';
import { CardnumberValidators } from '../common/validators/cardnumber.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card-payment-form',
  templateUrl: './card-payment-form.component.html',
  styleUrls: ['./card-payment-form.component.css']
})
export class CardPaymentFormComponent {

  creditCardForm = new FormGroup(
    {
      'creditCardNumber': new FormControl('', [Validators.required, CardnumberValidators.isInValidCreditCard]),
      'cardHolder': new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
      'expiryDate': new FormControl('', [Validators.required, DateValidators.isPastDate]),
      'cvv': new FormControl('',[CVVValidators.isCVVInValid]),
      'amount': new FormControl('',[Validators.required, AmountValidators.isInValidAmount])
    }
  );

  constructor(
    private service: CardPaymentService, 
    private store: Store<AppState>,
    private toastr: ToastrService
    ) { 
    }

  postPayment(){
    if(this.creditCardForm.valid){
      let paymentData = {
        creditCardNumber: this.creditCardNumber?.value,
        cardHolder: this.cardHolder?.value,
        cvv: this.cvv?.value,
        expirationDate: this.expiryDate?.value,
        amount: this.amount?.value
      };
      this.service.postCardPayment(paymentData)
      .subscribe(
        response => {
          this.store.dispatch(new CardPaymentActions.AddCardPayment(paymentData));
          this.toastr.success('Payment Details are added to your home page','Payment successfull');
        },
      (error: AppError) => {
        if(error instanceof BadInput)
        this.toastr.error('Bad data format');
        else
        this.toastr.error('An unexpected error occured');
      });
    }
  }

  get cvv() {
    return this.creditCardForm.get('cvv');
  }

  get creditCardNumber() {
    return this.creditCardForm.get('creditCardNumber');
  }

  get cardHolder() {
    return this.creditCardForm.get('cardHolder');
  }

  get expiryDate(){
    return this.creditCardForm.get('expiryDate');
  }

  get amount(){
    return this.creditCardForm.get('amount');
  }

  getCurrentDate(){
    let today = new Date();
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = String(today.getFullYear());
    let day = String(today.getDate() + 1).padStart(2,'0');
    return yyyy+'-'+mm+'-'+day;
  }

}
