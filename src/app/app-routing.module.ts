import { CharacterComponent } from './components/character/character.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/header/home', pathMatch: 'full' },
  {
    path: 'header', component: HeaderComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'details', component: DetailPageComponent },
      { path: 'character', component: CharacterComponent },
      { path: 'films', component: CharacterComponent},
      { path: 'species', component: CharacterComponent},
      { path: 'planets', component: CharacterComponent},
      { path: 'people', component: CharacterComponent},
      { path: 'starships', component: CharacterComponent},
      { path: 'vehicles', component: CharacterComponent},
      { path: 'films/details/:id', component: DetailPageComponent},
      { path: 'species/details/:id', component: DetailPageComponent},
      { path: 'planets/details/:id', component: DetailPageComponent},
      { path: 'people/details/:id', component: DetailPageComponent},
      { path: 'starships/details/:id', component: DetailPageComponent},
      { path: 'vehicles/details/:id', component: DetailPageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
