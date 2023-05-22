import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { apiResponse } from '../interfaces/apiResponse';
import { Movie } from '../interfaces/movies';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private API_URL: string ='http://www.omdbapi.com/?apikey=b5aad589';


  constructor(private http: HttpClient) { }

  getMovies(searchTerm: string):Observable<Movie[]>{
    return this.http.get<apiResponse>(this.API_URL + '&s='+ searchTerm).pipe(
      map(response => {
        return response.Search;
      })
    );
  }
}
