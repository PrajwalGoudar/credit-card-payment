import { ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

export class AmountValidators{
    static isInValidAmount(control: AbstractControl):ValidationErrors|null{
        let amountValidator = new RegExp(/^[1-9][0-9,'.']{0,7}$/);
        if(amountValidator.test(control.value as string)){
            return null;
        }    
        return {isAmountInValid: true}; 
    }
    
}