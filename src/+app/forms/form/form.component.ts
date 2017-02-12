import { Component, OnInit, Input } from '@angular/core';
import FieldDefinition from '../../core/fieldDefinition';

@Component({
    selector: 'cm-form',
    templateUrl: 'form.component.html'
})
export class FormComponent implements OnInit {
    @Input() formDefinition:FieldDefinition[];
    
    constructor() { }

    ngOnInit() { }
}