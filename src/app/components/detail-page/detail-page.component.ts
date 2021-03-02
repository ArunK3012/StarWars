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
  characters = [];
  films = [];
  species = [];
  planets = [];
  starships = [];
  vehicles = [];
  people = [];
  homeworld = [];
  residents = [];
  navigationLink = '';
  characterName: any = [];
  filmName: any = [];
  speciesName: any = [];
  planetsName: any = [];
  starshipsName: any = [];
  vehicleName: any = [];
  peopleName: any = [];
  homeworldName: any = [];
  residentsName: any = [];

  constructor(private service: ApiServiceService) { }

  ngOnInit(): void {
    this.navigationLink = this.service.urlLink;

    const url = this.service.detailsId;

    this.service.getDetails(url).subscribe(res => {
      console.log(res);
      this.data = res;
      this.characters = res.characters;
      this.people = res.people;
      this.films = res.films;
      this.species = res.species;
      this.planets = res.planets;
      this.homeworld = res.homeworld;
      this.residents = res.residents;
      this.starships = res.starships;
      this.vehicles = res.vehicles;
      if (this.characters !== undefined) {
        for (let i = 0; i < this.characters.length; i++) {
          this.service.getName(this.characters[i]).subscribe(response => {
            this.characterName.push(response.name);
          });
        }
      }
      if (this.people !== undefined) {
        for (let i = 0; i < this.people.length; i++) {
          this.service.getName(this.people[i]).subscribe(response => {
            this.peopleName.push(response.name);
          });
        }
      }
      if (this.residents !== undefined) {
        for (let i = 0; i < this.residents.length; i++) {
          this.service.getName(this.residents[i]).subscribe(response => {
            this.residentsName.push(response.name);
          });
        }
      }
      if (this.homeworld !== undefined) {
          this.service.getName(this.homeworld).subscribe(response => {
            this.homeworldName = (response.name);
          });
      }
      if (this.films !== undefined) {
        for (let i = 0; i < this.films.length; i++) {
          this.service.getName(this.films[i]).subscribe(response => {
            this.filmName.push(response.title);
          });
        }
      }
      if (this.species !== undefined) {
        for (let i = 0; i < this.species.length; i++) {
          this.service.getName(this.species[i]).subscribe(response => {
            this.speciesName.push(response.name);
          });
        }
      }
      if (this.planets !== undefined) {
        for (let i = 0; i < this.planets.length; i++) {
          this.service.getName(this.planets[i]).subscribe(response => {
            this.planetsName.push(response.name);
          });
        }
      }
      if (this.starships !== undefined) {
        for (let i = 0; i < this.starships.length; i++) {
          this.service.getName(this.starships[i]).subscribe(response => {
            this.starshipsName.push(response.name);
          });
        }
      }
      if (this.vehicles !== undefined) {
        for (let i = 0; i < this.vehicles.length; i++) {
          this.service.getName(this.vehicles[i]).subscribe(response => {
            this.vehicleName.push(response.name);
          });
        }
      }
    });
  }
}
