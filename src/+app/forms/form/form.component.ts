import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'cm-form',
    templateUrl: 'form.component.html'
})
export class FormComponent implements OnInit {
    @Input() formDefinition:Object[];
    
    constructor() { }

    ngOnInit() { }
}