import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SeverNgStyleDirectivesComponent } from './sever-ng-style-directives/sever-ng-style-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    SeverNgStyleDirectivesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
