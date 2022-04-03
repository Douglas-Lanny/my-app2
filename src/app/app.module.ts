import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalPromedioComponent } from './modal-promedio/modal-promedio.component';
import { InputMaskDirective } from './input-mask.directive';

@NgModule({
  declarations: [
    AppComponent,
    ModalPromedioComponent,
    InputMaskDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule
  ],

  entryComponents: [

    ModalPromedioComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
