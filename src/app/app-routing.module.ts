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
      { path: 'details/films/:id', component: DetailPageComponent},
      { path: 'details/species/:id', component: DetailPageComponent},
      { path: 'details/planets/:id', component: DetailPageComponent},
      { path: 'details/people/:id', component: DetailPageComponent},
      { path: 'details/starships/:id', component: DetailPageComponent},
      { path: 'details/vehicles/:id', component: DetailPageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
