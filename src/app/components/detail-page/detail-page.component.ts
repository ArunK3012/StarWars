import { Router } from '@angular/router';
import { ApiServiceService } from './../../service/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  data: any = [];
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
  pilots = [];
  navigationLink = '';
  characterName: any = [];
  filmName: any = [];
  speciesName: any = [];
  planetsName: any = [];
  starshipsName: any = [];
  vehicleName: any = [];
  peopleName: any = [];
  pilotsName: any = [];
  homeworldName: any = [];
  residentsName: any = [];
  url: any = [];
  details: any = [];

  constructor(private service: ApiServiceService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.navigationLink = this.router.url.split('/')[2];
    if (this.navigationLink === 'films') {
      this.url = this.service.filmUrl;
    }
    if (this.navigationLink === 'species') {
      this.url = this.service.speciesUrl;
    }
    if (this.navigationLink === 'planets') {
      this.url = this.service.planetsUrl;
    }
    if (this.navigationLink === 'starships') {
      this.url = this.service.starshipUrl;
    }
    if (this.navigationLink === 'people') {
      this.url = this.service.charUrl;
    }
    if (this.navigationLink === 'vehicles') {
      this.url = this.service.vehicleUrl;
    }
    this.service.getDetails(this.url).subscribe(res => {
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
      this.pilots = res.pilots;
      if (this.characters !== undefined) {
        for (let i = 0; i < this.characters.length; i++) {
          this.service.getName(this.characters[i]).subscribe(response => {
            if (i !== this.characters.length - 1) {
              this.characterName.push(response.name + ',');
            }
            if (i === this.characters.length - 1) {
              this.characterName.push(response.name + '.');
            }
          });
        }
      }
      if (this.people !== undefined) {
        for (let i = 0; i < this.people.length; i++) {
          this.service.getName(this.people[i]).subscribe(response => {
            if (i !== this.people.length - 1) {
              this.peopleName.push(response.name + ',');
            }
            if (i === this.people.length - 1) {
              this.peopleName.push(response.name + '.');
            }
          });
        }
      }
      if (this.residents !== undefined) {
        for (let i = 0; i < this.residents.length; i++) {
          this.service.getName(this.residents[i]).subscribe(response => {
            if (i !== this.residents.length - 1) {
              this.residentsName.push(response.name + ',');
            }
            if (i === this.residents.length - 1) {
              this.residentsName.push(response.name + '.');
            }
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
            if (i !== this.films.length - 1) {
              this.filmName.push(response.title + ',');
            }
            if (i === this.films.length - 1) {
              this.filmName.push(response.title + '.');
            }
          });
        }
      }
      if (this.species !== undefined) {
        for (let i = 0; i < this.species.length; i++) {
          this.service.getName(this.species[i]).subscribe(response => {
            if (i < this.species.length - 1) {
              this.speciesName.push(response.name + ',');
            }
            if (i === this.species.length - 1) {
              this.speciesName.push(response.name + '.');
            }
          });
        }
      }
      if (this.planets !== undefined) {
        for (let i = 0; i < this.planets.length; i++) {
          this.service.getName(this.planets[i]).subscribe(response => {
            if (i !== this.planets.length - 1) {
              this.planetsName.push(response.name + ',');
            }
            if (i === this.planets.length - 1) {
              this.planetsName.push(response.name + '.');
            }
          });
        }
      }
      if (this.starships !== undefined) {
        for (let i = 0; i < this.starships.length; i++) {
          this.service.getName(this.starships[i]).subscribe(response => {
            if (i !== this.starships.length - 1) {
              this.starshipsName.push(response.name + ',');
            }
            if (i === this.starships.length - 1) {
              this.starshipsName.push(response.name + '.');
            }
          });
        }
      }
      if (this.pilots !== undefined) {
        for (let i = 0; i < this.pilots.length; i++) {
          this.service.getName(this.pilots[i]).subscribe(response => {
            if (i !== this.pilots.length - 1) {
              this.pilotsName.push(response.name + ',');
            }
            if (i === this.pilots.length - 1) {
              this.pilotsName.push(response.name + '.');
            }
          });
        }
      }
      if (this.vehicles !== undefined) {
        for (let i = 0; i < this.vehicles.length; i++) {
          this.service.getName(this.vehicles[i]).subscribe(response => {
            if (i !== this.vehicles.length - 1) {
              this.vehicleName.push(response.name + ',');
            }
            if (i === this.vehicles.length - 1) {
              this.vehicleName.push(response.name + '.');
            }
          });
        }
      }
    });
  }
}
