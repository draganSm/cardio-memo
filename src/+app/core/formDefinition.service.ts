import { Injectable } from '@angular/core';

@Injectable()
export default class FormDefinitionService {

    // TODO: replace Object to FieldDefinition
    getFormFields(formName: String): Promise<Object[]> {
        return Promise.resolve([{a: 1, b: 'test'}]);
    }
}
