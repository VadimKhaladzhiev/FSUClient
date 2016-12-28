import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import {SearchResultService} from "./result.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, JsonpModule
  ],
  declarations: [ AppComponent ],
  providers: [SearchResultService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
