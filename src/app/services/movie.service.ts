import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  API_URL: string ='http://www.omdbapi.com/?apikey=b5aad589';


  constructor(private http: HttpClient) { }

  getMovies(searchTerm: string){
    this.http.get(this.API_URL + '&s='+ searchTerm);
  }
}
