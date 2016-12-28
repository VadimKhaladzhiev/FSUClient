import { Component } from '@angular/core';
import {SearchResult} from "./search_result.model";
import {SearchResultService} from "./result.service";

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.component.html'
})
export class AppComponent  {
  name = 'FSUClient';
  results: SearchResult[];

  constructor(private sarchResultService: SearchResultService) { }

  ngOnInit(): void {
    this.getResults();
  }

  getResults(): void {
    this.sarchResultService.getResults().then(results => this.results = results);
  }

}
