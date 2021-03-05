import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  BASEURL = 'https://swapi.dev/api/';
  urlLink: any;
  detailsId: any;
  page = 1;
  charPage = 1;
  speciesPage = 1;
  planetsPage = 1;
  starshipsPage = 1;
  vehiclesPage = 1;
  filmUrl: any = [];
  charUrl: any = [];
  speciesUrl: any = [];
  planetsUrl: any = [];
  starshipUrl: any = [];
  vehicleUrl: any = [];

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
