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

    return this.http.get(url);

  }

  getDetails(url: string): Observable<any> {

    return this.http.get(`${url}`);
  }

  getName(data: any): Observable<any> {

    return this.http.get(`${data}`);

  }
}
