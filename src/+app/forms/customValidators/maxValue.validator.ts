import { AbstractControl, ValidatorFn } from '@angular/forms';

import { isEmptyInputValue } from './validatorsCommon';

export default function minValueValidator(max: number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const value = (control.value || '').trim();
    if(!isEmptyInputValue(value) && !isNaN(+value)) {
      const numValue = parseFloat(value);
      if(numValue > max) {
        return {'maxvalue': {'requiredValue': max, 'actualValue': numValue}}
      }
    }
    return null;
  };
}
