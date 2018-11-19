import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Raclette party';

  isThisIngredientVital = true;

  displayGuestList = true;

  songList: string[] = ['Alejandro', 'Ne me quitte pas', 'Le temps est bon'];

  displayMovies = true;

  bestMovie = true;

  constructor() { }

  ngOnInit() {
  }

  changeGuestList() {
    this.displayGuestList = !this.displayGuestList;
  }

}
