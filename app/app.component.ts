import { Component } from '@angular/core';
import {SearchResult} from "./search_result.model";
import {SearchResultService} from "./result.service";
import {LazyLoadEvent} from "primeng/components/common/api";

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.component.html'
})
export class AppComponent  {
  name = 'FSUClient';
  result: SearchResult[];
  totalRecords: number;

  datePicker: DatePicker;

  constructor(private sarchResultService: SearchResultService) {
    this.datePicker = new DatePicker();
  }

  getResults(event: LazyLoadEvent): void {
    this.sarchResultService.getResults(event)
      .mapTo((result : any) => {console.log("dsfdsdf");});
    this.sarchResultService.getResults(event)
      .subscribe(
        result => {this.result = result.results;this.totalRecords = result.count}, //Bind to view
        err => {
          console.log(err);
        });
  }

  loadLazy(event: LazyLoadEvent) {
    this.getResults(event);
  }

}

export class DatePicker{
  value : Date = new Date();
  updateDate(date: string) {
    this.value = new Date(date);
  }
}
