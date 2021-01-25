import * as CardPaymentActions from '../actions/card-payment.action';
import { CardPayment } from '../models/card-payment.model';
import { Action } from '@ngrx/store';

export function reducer(state: CardPayment[], action: CardPaymentActions.Actions){
    switch(action.type){
        case CardPaymentActions.ADD_CARD_PAYMENT:
            return [...state, action.payload];
        default:
            return [state];    
    }
}