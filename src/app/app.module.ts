import { RouterModule } from '@angular/router';
import { CardPaymentService } from './services/card-payment.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPaymentFormComponent } from './card-payment-form/card-payment-form.component';

import {StoreModule} from '@ngrx/store';
import { reducer } from './reducers/card-payment.reducer';
import { ReadCardPaymentDataComponent } from './read-card-payment-data/read-card-payment-data.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PaymentPageComponent } from './payment-page/payment-page.component';

const routes =  [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'payment',
    component: PaymentPageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CardPaymentFormComponent,
    ReadCardPaymentDataComponent,
    HomeComponent,
    PaymentPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(
      {
        cardPayment  : reducer
      }
    ),
    RouterModule.forRoot(
     routes
    )
  ],
  providers: [CardPaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
