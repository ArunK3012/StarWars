import { Router } from '@angular/router';
import { ApiServiceService } from './../../service/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  url = '';
  pageNo = 1;
  data: any;
  navigation: any;
  pageCount = 1;
  name = '';
  title: any = [];
  id: any;
  details: any = [];
  BASEURL = 'https://swapi.dev/api/';

  constructor(private service: ApiServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.loadList();
  }

  loadList(): void{
    const url = this.router.url.split('/').pop();
    this.navigation = url;
    this.service.urlLink = url;
    if (url === 'species') {
      const page = this.service.speciesPage;
      this.pageNo = page;
      this.service.swapi(url, page).subscribe(res => {
        console.log(res);
        this.data = res.results;
        this.pageCount = Math.trunc((res.count) / 10);
      });
    }
    if (url === 'people') {
      const page = this.service.charPage;
      this.pageNo = page;
      this.service.swapi(url, page).subscribe(res => {
        console.log(res);
        this.data = res.results;
        this.pageCount = Math.trunc((res.count) / 10);
      });
    }
    if (url === 'planets') {
      const page = this.service.planetsPage;
      this.pageNo = page;
      this.service.swapi(url, page).subscribe(res => {
        console.log(res);
        this.data = res.results;
        this.pageCount = Math.trunc((res.count) / 10);
      });
    }
    if (url === 'starships') {
      const page = this.service.starshipsPage;
      this.pageNo = page;
      this.service.swapi(url, page).subscribe(res => {
        console.log(res);
        this.data = res.results;
        this.pageCount = Math.trunc((res.count) / 10);
      });
    }
    if (url === 'vehicles') {
      const page = this.service.vehiclesPage;
      this.pageNo = page;
      this.service.swapi(url, page).subscribe(res => {
        console.log(res);
        this.data = res.results;
        this.pageCount = Math.trunc((res.count) / 10);
      });
    }
    if (url === 'films') {
      this.service.swapi(url, this.pageNo).subscribe(res => {
        console.log(res);
        this.data = res.results;
        this.pageCount = Math.trunc((res.count) / 10);
      });
    }
  }

  paginate(direction: number): void {
    if (this.navigation === 'species') {
      this.pageNo += direction;
      this.service.speciesPage = this.pageNo;
      this.loadList();
    }
    if (this.navigation === 'people') {
      this.pageNo += direction;
      this.service.charPage = this.pageNo;
      this.loadList();
    }
    if (this.navigation === 'planets') {
      this.pageNo += direction;
      this.service.planetsPage = this.pageNo;
      this.loadList();
    }
    if (this.navigation === 'starships') {
      this.pageNo += direction;
      this.service.starshipsPage = this.pageNo;
      this.loadList();
    }
    if (this.navigation === 'vehicles') {
      this.pageNo += direction;
      this.service.vehiclesPage = this.pageNo;
      this.loadList();
    }
  }

  getDetails(itemUrl: string): void {
    this.service.detailsId = (itemUrl);
  }

}
