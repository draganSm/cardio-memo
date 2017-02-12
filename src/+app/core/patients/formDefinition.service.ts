import { Injectable } from '@angular/core';

@Injectable()
export class FormDefinitionService {

    getFormFields(formName: String): Promise<Object[]> {
        return Promise.resolve([]);
    }
}
