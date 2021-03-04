import { ApiServiceService } from './../../service/api-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  routerLinkActiveOptions = {
    exact: true,
  };

  homeScreen = false;
  link = '';
  backgroundColor = '';
  page = 1;

  constructor(private router: Router,
              private service: ApiServiceService) { }

  ngOnInit(): void {
    const url = this.router.url.split('/').pop();

    if (url !== 'home') {
      this.homeScreen = true;
    }
    else {
      this.homeScreen = false;
    }
  }

}
