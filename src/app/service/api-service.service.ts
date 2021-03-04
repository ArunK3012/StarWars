import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  BASEURL = 'https://swapi.dev/api/';
  urlLink: any;
  detailsId: any;
  page = 1;
  apiResponse: any = [];
  detailsResponse: any = [];
  charPage = 1;
  speciesPage = 1;
  planetsPage = 1;
  starshipsPage = 1;
  vehiclesPage = 1;
  storage: any = [];
  link: any = [];
  charResponse: any = [];
  speicesResponse: any = [];
  vehicleResposne: any = [];
  planetsResponse: any = [];
  filmResponse: any = [];
  starshipResponse: any = [];
  details: any = [];
  results: any = [];
  temp: any = [];

  public responseCache = new Map();

  constructor(private http: HttpClient) { }

  swapi(data: any, pageNo: number): Observable<any> {

    const url = (`${this.BASEURL}${data}/?page=${pageNo}`);

  //   const storage = JSON.parse(localStorage.getItem(`${data}`) || 'null');
  //   if (storage !== null) {
  //     for (const i = 1 ; i < storage.length; i + 2) {
  //       if (storage[i] === url) {
  //         return of(storage[i - 1]);
  //       }
  //     }
  //   }
  //   const link = this.http.get(url);
  //   link.subscribe(name => {
  //     this.temp.push(name, url);
  //     localStorage.setItem(`${data}`, JSON.stringify(this.temp));
  // });
  //   return link;
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

  getName(data: any): Observable<any> {
    // return this.http.get(`${data}`);
    const url = `${data}`;
    const fromCache = this.responseCache.get(url);
    if (fromCache) {
      return of(fromCache);
    }
    const link = this.http.get(url);
    link.subscribe(name => this.responseCache.set(url, name));
    return link;
  }
}
