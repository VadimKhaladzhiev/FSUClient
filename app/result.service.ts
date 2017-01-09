import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import {SearchResults} from "./search_results.model";
import {LazyLoadEvent} from "primeng/components/common/api";

@Injectable()
export class SearchResultService {

  private resultUrl = 'http://localhost:8100/search_results/limit/';  // URL to web api

  constructor(private http: Http) {}

  // getResults(first: number, rows: number): Observable<SearchResult[]> {
  //   return this.http.get(this.resultUrl+'?page='+(first/rows)+'&limit='+rows)
  //     .map((r: Response) => r.json().results as SearchResult[]);
  // }

  getResults(event: LazyLoadEvent): Promise<SearchResults> {
    return this.http.get(this.resultUrl+`?page=${event.first/event.rows}&limit=${event.rows}`)
      .toPromise()
      .then(response => response.json() as SearchResults)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
