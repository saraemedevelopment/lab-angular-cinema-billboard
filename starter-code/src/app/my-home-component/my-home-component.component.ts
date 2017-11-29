import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../services/service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers: [CinemaService]
})
export class MyHomeComponentComponent implements OnInit {
  movies : Array<Object>;
  constructor(public cinemaService : CinemaService) { }

    ngOnInit() {
      this.movies = this.cinemaService.getMovies();
  }

}
