export interface CardPayment{
    creditCardNumber: string,
    cardHolder: string,
    expirationDate: Date,
    cvv?: string,
    amount: string
}