import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeModule } from './+home/home.module';
import { AboutModule } from './+about/about.module';
import { TodoModule } from './+todo/todo.module';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, XLargeDirective } from './app/app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './forms/form/form.component';
import FormDefinitionService from './core/formDefinition.service';

@NgModule({
  declarations: [ 
    AppComponent, 
    FormComponent,
    NavbarComponent,
    XLargeDirective
  ],
  imports: [
    SharedModule,
    HomeModule,
    AboutModule,
    TodoModule,
    AppRoutingModule
  ],
  providers: [
    FormDefinitionService
  ]
})
export class AppModule {
}

export { AppComponent } from './app/app.component';
