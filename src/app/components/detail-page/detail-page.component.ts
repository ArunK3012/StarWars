import { ApiServiceService } from './../../service/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  data: any;
  name = '';
  characters: any;
  navigationLink = '';

  constructor(private service: ApiServiceService) { }

  ngOnInit(): void {
    this.navigationLink = this.service.urlLink;

    const url = this.service.detailsId;

    this.service.getDetails(url).subscribe(res => {
      console.log(res);
      this.data = res;
    });

  }

}
