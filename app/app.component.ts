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
  results: SearchResult[];
  totalRecords: number;

  constructor(private sarchResultService: SearchResultService) {
    this.totalRecords=19849;
  }

  ngOnInit(): void {
    this.getResults(0, 5);
  }

  getResults(first: number, rows: number): void {
    this.sarchResultService.getResults(first, rows).then(results => this.results = results);
  }

  loadLazy(event: LazyLoadEvent) {
    console.log("first "+event.first+"; rows: "+event.rows);
    this.getResults(event.first, event.rows);
  }
}
