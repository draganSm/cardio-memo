import FieldValidation from './fieldValidation';

export default class FieldDefinition {
    label: String;
    name: String;
    path: String;
    validations: FieldValidation[];
}

