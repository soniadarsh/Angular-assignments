import { HarryComponent } from './server/harry.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PotterComponent } from './potter/potter.component';

@NgModule({
  declarations: [
    AppComponent,
    HarryComponent,
    PotterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
