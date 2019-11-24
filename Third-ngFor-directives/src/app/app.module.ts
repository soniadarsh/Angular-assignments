import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerOneComponent } from './server-one/server-one.component';
import { ServerTwoComponent } from './server-two/server-two.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerOneComponent,
    ServerTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
