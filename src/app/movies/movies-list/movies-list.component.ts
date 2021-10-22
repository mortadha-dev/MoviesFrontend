import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/Movie';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies:Movie[] ;

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.moviesService.ShowAllMovies().subscribe((prods) => {
      console.log(prods);
      this.movies = prods;
    });

  }
}
