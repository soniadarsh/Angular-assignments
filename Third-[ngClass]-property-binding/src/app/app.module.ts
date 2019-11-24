import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerNgClassDirectivesComponent } from './server-ng-class-directives/server-ng-class-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerNgClassDirectivesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
