import { Router, ActivatedRoute } from '@angular/router';
import { ApiServiceService } from './../../service/api-service.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
  id: any;

  // @Output() getUrl = new EventEmitter<string>();

  constructor(private service: ApiServiceService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadList(this.pageNo);
  }

  loadList(page: number): void{
    const url = this.router.url.split('/').pop();
    this.navigation = url;
    this.service.urlLink = url;
    this.service.swapi(page).subscribe(res => {
      console.log(res);
      this.data = res.results;
      if (this.navigation === 'films') {
        this.name = res.results.title;
      }
      else {
        this.name = res.results.name;
      }
      this.pageCount = Math.trunc((res.count) / 10);
    });
  }

  paginate(direction: number): void {
    this.pageNo += direction;
    this.loadList(this.pageNo);
  }

  getDetails(itemUrl: string): void {
    this.service.detailsId = itemUrl;
  }
}
