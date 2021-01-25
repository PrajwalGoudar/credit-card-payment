import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CardnumberValidators{

    static isInValidCreditCard(control: AbstractControl): ValidationErrors|null{ 
        let creditCardValidator = new RegExp(/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/);
        if(creditCardValidator.test(control.value as string)){
            return null;
        }    
        return {isInValidCreditCard: true}; 
    }

}