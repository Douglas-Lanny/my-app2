import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalPromedioComponent } from './modal-promedio/modal-promedio.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalPromedioComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule
  ],

  entryComponents: [

    ModalPromedioComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
