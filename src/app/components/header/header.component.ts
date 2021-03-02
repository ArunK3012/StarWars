import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  homeScreen = false;
  constructor(private router: Router) { }

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
