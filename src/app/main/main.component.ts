import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { GifItem } from '../data/gif-item';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  gifs: GifItem[];
  isSearch: boolean = false;
  showLess: boolean = false;
  searchTerm: string;
  constructor(private gifService: GifsService) {}

  getGifs() {
    this.gifService.getGifs().subscribe((data) => {
      this.showLess = false;
      this.gifs = data.data;
    });
  }

  getMoreGifs() {
    this.gifService.getMoreGifs().subscribe((data) => {
      this.showLess = true;
      this.gifs = data.data;
    });
  }

  getSearchedGifs() {
    this.isSearch = true;
    this.showLess = false;
    this.gifService.searchGifs(this.searchTerm).subscribe((data) => {
      this.gifs = data.data;
    });
  }
  getMoreSearchedGifs() {
    this.isSearch = true;
    this.showLess = true;
    this.gifService.searchMoreGifs(this.searchTerm).subscribe((data) => {
      this.gifs = data.data;
    });
  }

  showSearchedGifs() {
    this.isSearch = true;

    this.gifs = [];
  }
  showTrendingGifs() {
    this.isSearch = false;

    this.getGifs();
    this.searchTerm = '';
  }
  ngOnInit(): void {
    this.getGifs();
  }
}
