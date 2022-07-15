import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ["Back to the Future", "Oceans 11", "Singin' in the Rain", "Hot Fuzz"];

   constructor() { }

   ngOnInit() {
   }

}
