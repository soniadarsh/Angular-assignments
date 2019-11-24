import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerLogTimestampComponent } from './server-log-timestamp/server-log-timestamp.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerLogTimestampComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
