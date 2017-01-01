import {Injectable} from "@angular/core";
// import {Observable} from "rxjs";
import {Http, Response} from "@angular/http";
import {SearchResult} from "./search_result.model";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchResultService {

  private resultUrl = 'http://localhost:8100/search_results/limit/';  // URL to web api

  constructor(private http: Http) {}

  // getResults(first: number, rows: number): Observable<SearchResult[]> {
  //   return this.http.get(this.resultUrl+'?page='+(first/rows)+'&limit='+rows)
  //     .map((r: Response) => r.json().results as SearchResult[]);
  // }


  // getResults(): SearchResult[] {
  //   return SEARCH_RESULTS;
  // }

  // getResults(): Promise<SearchResult[]> {
  //   return Promise.resolve(SEARCH_RESULTS);
  // }

  getResults(first: number, rows: number): Promise<SearchResult[]> {
    return this.http.get(this.resultUrl+'?page='+(first/rows)+'&limit='+rows)
      .toPromise()
      .then(response => response.json().results as SearchResult[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
