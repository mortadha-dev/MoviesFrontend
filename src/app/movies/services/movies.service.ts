import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../model/Movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiURL: string = 'http://localhost:8020/movies/';
  constructor(private httpClient:HttpClient) { }
  
  ShowAllMovies():Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(this.apiURL+"get");
     
  }
  addMovie(movie:Movie):Observable<Movie>{
    console.log(movie)
    return this.httpClient.post<Movie>(`${this.apiURL + 'addMovie'}`, movie)

  }
}
