import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  BASEURL = 'https://swapi.dev/api/';
  urlLink: any;
  detailsId: any;

  public responseCache = new Map();

  constructor(private http: HttpClient) { }

  swapi(pageNo: number): Observable<any> {

    // const Params = new HttpParams({
    //   fromObject: {
    //     page: `${pageNo}`,
    //   }
    // });

    // return this.http.get(`${this.BASEURL}${this.urlLink}`, {params: Params});
    // console.log(`${this.BASEURL}${this.urlLink}${Params}`);

    const url = (`${this.BASEURL}${this.urlLink}/?page=${pageNo}`);
    const fromCache = this.responseCache.get(url);
    if (fromCache) {
      return of(fromCache);
    }
    const link = this.http.get(url);
    link.subscribe(name => this.responseCache.set(url, name));
    return link;
  }

  getDetails(url: string): Observable<any> {
    // return this.http.get(`${url}`);
    const id = `${url}`;
    const fromCache = this.responseCache.get(id);
    if (fromCache) {
      return of(fromCache);
    }
    const link = this.http.get(id);
    link.subscribe(name => this.responseCache.set(id, name));
    return link;
  }

}
