import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ListaModule } from './lista/lista.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CompAtributosComponent } from './comp-atributos/comp-atributos.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CompAtributosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ListaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
