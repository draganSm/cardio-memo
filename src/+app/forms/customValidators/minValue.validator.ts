import { AbstractControl, ValidatorFn } from '@angular/forms';

import { isEmptyInputValue } from './validatorsCommon';

export default function minValueValidator(min: number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const value = (control.value || '').trim();
    if(!isEmptyInputValue(value) && !isNaN(+value)) {
      const numValue = parseFloat(value);
      if(numValue < min) {
        return {'minvalue': {'requiredValue': min, 'actualValue': numValue}}
      }
    }
    return null;
  };
}
