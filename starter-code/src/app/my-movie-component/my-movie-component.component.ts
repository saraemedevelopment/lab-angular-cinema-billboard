import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import moviesList from '../../sample-movies';
import { CinemaService } from '../services/service';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css'],
  providers: [CinemaService]
})

export class MyMovieComponentComponent implements OnInit {
  movieId: Number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.movieId = Number(params['id']));
  }

}
