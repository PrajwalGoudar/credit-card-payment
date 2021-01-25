import { AbstractControl, ValidationErrors} from '@angular/forms';

export class DateValidators {

    static isPastDate(control: AbstractControl): ValidationErrors | null{
        let d1 = Date.parse(Date());
        let d2 = Date.parse(control.value);
        if(d2>=d1){
                return null;
        }
        return {isPastDate: true};  
    }

    static isNotInDateFormat(control: AbstractControl) : ValidationErrors | null {
        let dateFormatValidator = new RegExp(/^[2][0-1][0-9][0-9]['-'][0-1][0-9]['-'][0-3][0-9]$/);
        if(dateFormatValidator.test(control.value as string)){
            return null;
        }    
        return {isNotInDateFormat: true}; 
    }

}