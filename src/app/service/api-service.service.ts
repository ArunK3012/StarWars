import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  BASEURL = 'https://swapi.dev/api/';
  BASE = 'http://swapi.dev/api/';
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
  details: any = [];
  saveDetails: any = [];
  saveName: any = [];
  getList: any = [];

  constructor(private http: HttpClient) { }

  swapi(data: any, pageNo: number): Observable<any> {

    const url = (`${this.BASEURL}${data}/?page=${pageNo}`);

    const page = pageNo + 1;
    const prev = pageNo - 1;

    const temp = (`${this.BASE}${data}/?page=${page}`);

    const previous = (`${this.BASE}${data}/?page=${prev}`);

    const list = JSON.parse(localStorage.getItem('GetResponseList') || 'null');
    if (list !== null) {
      for (let i = 0; i < list.length; i++) {
        if (list[i].previous === previous && list[i].next === null) {
          return of(list[i]);
        }
        if (list[i].next === temp) {
          return of(list[i]);
        }
        if (data === 'films') {
          if (list[i].next === null && list[i].previous === null) {
            return of(list[i]);
          }
        }
      }
    }
    const item = this.http.get(url);
    item.subscribe(name => {
      this.getList.push(name);
      const arrList = [].concat(this.getList);
      localStorage.setItem('GetResponseList', JSON.stringify(arrList));
    });
    return item;
  }

  getDetails(url: string): Observable<any> {

    const now = new Date();

    const ttl = 300;

    const details = JSON.parse(localStorage.getItem('getDetails') || 'null');
    if (details !== null) {
      for (let i = 0; i < details.length; i++) {
        if (details[i].url === url) {
          return of(details[i]);
        }
      }
    }
    const data = this.http.get(`${url}`);
    data.subscribe(name => {
      this.saveDetails.push(name);
      localStorage.setItem('getDetails', JSON.stringify(this.saveDetails));
    }
    );
    return data;
  }

  getName(item: any): Observable<any> {

    const details = JSON.parse(localStorage.getItem('getName') || 'null');
    if (details !== null) {
      for (let i = 0; i < details.length; i++) {
        if (details[i].url === item) {
          return of(details[i]);
        }
      }
    }
    const data = this.http.get(`${item}`);
    data.subscribe(name => {
      this.saveName.push(name);
      localStorage.setItem('getName', JSON.stringify(this.saveName))
    }
    );
    return data;

  }
}
