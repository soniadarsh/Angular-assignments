import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerEventBindingComponent } from './server-event-binding/server-event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerEventBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
