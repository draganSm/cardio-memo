import { AbstractControl, ValidatorFn } from '@angular/forms';

import { isEmptyInputValue } from './validatorsCommon';

export default function numberValidator(control: AbstractControl): { [key: string]: any } {
    const value = (control.value || '').trim();
    if (!isEmptyInputValue(value) && !isNaN(+value)) {
        return null;
    }
    return { 'number': true };
};
