import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerLogToggleColoringComponent } from './server-log-toggle-coloring/server-log-toggle-coloring.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerLogToggleColoringComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
