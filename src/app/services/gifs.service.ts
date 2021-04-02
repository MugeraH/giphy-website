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
  gifImages: [];

  constructor(private http: HttpClient) {}

  getGifs(): Observable<any> {
    let data = this.http.get<any>(this.trendingGifUrl);
    return data;
  }
}
