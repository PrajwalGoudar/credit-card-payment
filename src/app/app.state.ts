import { CardPayment } from './models/card-payment.model';

export interface AppState {
    readonly cardPayment: CardPayment[];
}