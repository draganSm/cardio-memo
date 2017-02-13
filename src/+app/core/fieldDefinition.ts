import FieldValidation from './fieldValidation';

export default class FieldDefinition {
    label: string;
    name: string;
    path: string;
    validations: FieldValidation[];
}

