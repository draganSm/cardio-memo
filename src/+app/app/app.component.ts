import { Component, Directive, ElementRef, Renderer, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import FormDefinitionService from '../core/formDefinition.service';
//
/////////////////////////
// ** Example Directive
// Notice we don't touch the Element directly

@Directive({
  selector: '[xLarge]'
})
export class XLargeDirective {
  constructor(element: ElementRef, renderer: Renderer) {
    // ** IMPORTANT **
    // we must interact with the dom through -Renderer-
    // for webworker/server to see the changes
    renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
    // ^^
  }
}

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'app',
  styles: [``],
  templateUrl: './app.component.html'
})
export class AppComponent {
  testForm: Object[];

  constructor(private formDefinitionService: FormDefinitionService) {
    this.formDefinitionService.getFormFields('test')
      .then(fields => {
        this.testForm = fields;
      });
  }
}
