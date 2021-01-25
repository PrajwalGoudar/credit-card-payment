import { CardPayment } from './../models/card-payment.model';
import { Action } from '@ngrx/store';

export const ADD_CARD_PAYMENT = '[CARD_PAYMENT] Add';
export const REMOVE_CARD_PAYMENT = '[CARD_PAYMENT] Remove';

export class AddCardPayment implements Action{
    readonly type =  ADD_CARD_PAYMENT;

    constructor(public payload: CardPayment){}
}

export type Actions = AddCardPayment;