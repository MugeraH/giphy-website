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

  constructor(private gifService: GifsService) {}

  getData = () => {
    this.gifService.getGifs().subscribe((data) => {
      this.gifs = data.data;
      console.log(this.gifs);
    });
  };

  ngOnInit(): void {
    this.getData();
  }
}
