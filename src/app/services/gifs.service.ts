import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { GifItem } from '../data/gif-item';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GifsService {
  apiKey: string = environment.apiKey;

  constructor(private http: HttpClient) {}

  getGifs(): Observable<any> {
    return this.http.get(
      `https://api.giphy.com/v1/gifs/trending?api_key=${environment.apiKey}&limit=8`
    );
  }
  getMoreGifs(): Observable<any> {
    return this.http.get(
      `https://api.giphy.com/v1/gifs/trending?api_key=${environment.apiKey}&limit=20`
    );
  }

  searchGifs(searchTerm: string): Observable<any> {
    return this.http.get(
      `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${environment.apiKey}&limit=5`
    );
  }
  searchMoreGifs(searchTerm: string): Observable<any> {
    return this.http.get(
      `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${environment.apiKey}&limit=15`
    );
  }

  // searchGifs(gifName: string) {
  //   return this.http
  //     .get(
  //       `https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=${environment.giphyApiKey}&limit=10`
  //     )
  //     .subscribe((response: any) => {
  //       this.gifs.next(response.data);
  //     });
  // }
}
