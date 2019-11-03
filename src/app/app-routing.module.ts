import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './marvel/characters/characters.component';
import { HomeComponent } from './home/home.component';
import { ComicsComponent } from './marvel/comics/comics.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'herois', component: CharactersComponent
  },
  {
    path: 'historias', component: ComicsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
