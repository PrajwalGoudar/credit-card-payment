import { AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
export class CVVValidators{

    static isCVVInValid(control: AbstractControl) :ValidationErrors | null{
        let cvvValidator = new RegExp(/^[0-9]{0,3}$/);
        if(cvvValidator.test(control.value as string) || (control.value as string).length===0){
             return null;
        }    
        return {isCVVInValid: true};
    }

}