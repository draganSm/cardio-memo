import { Injectable } from '@angular/core';
import FieldDefinition from './fieldDefinition';
import FieldValidation from './fieldValidation';
import FieldValidationTypes from './fieldValidationTypes';

@Injectable()
export default class FormDefinitionService {

    getFormFields(formName: String): Promise<FieldDefinition[]> {
        return Promise.resolve([
            <FieldDefinition>{
                name: 'test',
                label: 'test label',
                path: 'path.test',
                validations: [
                    <FieldValidation>{
                        validationType: FieldValidationTypes.Required,
                        validationMessage: 'The field #{name} is required',
                        priority: 0
                    }
                ]
            }
        ]);
    }
}
