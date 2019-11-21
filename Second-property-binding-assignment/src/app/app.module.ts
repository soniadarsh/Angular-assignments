import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerPropBindingComponent } from './server-prop-binding/server-prop-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerPropBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
