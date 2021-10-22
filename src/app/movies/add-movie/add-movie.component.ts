import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../model/Movie';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(private moviesService:MoviesService, private route :Router) { }
  movie=new Movie() ; 

  selectedOption: string;
  printedOption: string;

  options = [
    { name: "Action", value: 1 },
    { name: "Aventure", value: 2 }
  ]


  ngOnInit(): void {
  }
   addMovie(){
     this.movie.genre=this.selectedOption;
     console.log(this.movie.genre)
     this.moviesService.addMovie(this.movie).subscribe((prod) => {
      console.log(prod);
    });
    this.route.navigate(['moviesList']);

  }

}
