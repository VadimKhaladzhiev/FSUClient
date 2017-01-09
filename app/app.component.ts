import { Component } from '@angular/core';
import {SearchResult} from "./search_result.model";
import {SearchResultService} from "./result.service";
import {LazyLoadEvent} from "primeng/components/common/api";
import {SearchResults} from "./search_results.model";

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.component.html'
})
export class AppComponent  {
  name = 'FSUClient';
  result: SearchResult[];
  results: SearchResults;
  totalRecords: number;

  datePicker: DatePicker;

  constructor(private sarchResultService: SearchResultService) {
    this.datePicker = new DatePicker();
  }

  ngOnInit(): void {
  }

  getResults(event: LazyLoadEvent): void {
    this.sarchResultService.getResults(event).then(result => {this.results = result; this.result = result.results; this.totalRecords = result.count;});
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
