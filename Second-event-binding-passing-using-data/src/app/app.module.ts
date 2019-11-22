import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerEbindPassUseDataComponent } from './server-ebind-pass-use-data/server-ebind-pass-use-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerEbindPassUseDataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
