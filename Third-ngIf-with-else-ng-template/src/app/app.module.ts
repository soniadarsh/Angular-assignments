import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerNgIfElseComponent } from './server-ng-if-else/server-ng-if-else.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerNgIfElseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
