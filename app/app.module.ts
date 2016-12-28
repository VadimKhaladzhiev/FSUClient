import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import {SearchResultService} from "./result.service";

import {InputTextModule} from 'primeng/primeng';
import {DataTableModule,SharedModule} from 'primeng/primeng';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, JsonpModule,
    InputTextModule, DataTableModule, SharedModule
  ],
  declarations: [ AppComponent ],
  providers: [SearchResultService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
