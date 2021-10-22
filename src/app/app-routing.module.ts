import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';

const routes: Routes = [
  { path: 'moviesList', component: MoviesListComponent },
  { path: 'addMovie', component: AddMovieComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
