import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerDirectivesNgifComponent } from './server-directives-ngif/server-directives-ngif.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerDirectivesNgifComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
