import FieldDefinition from '../core/fieldDefinition';
export class FieldBase<T> extends FieldDefinition {
  value: T;
  controlType: string;
  constructor(value:T) {
    super();
    this.value = value;
  }
}