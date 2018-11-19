import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Raclette party';

  isThisIngredientVital = true;

  displayGuestList = true;

  songList: string[] = ['Alejandro', 'Ne me quitte pas', 'Le temps est bon'];

  displayMovies = true;

  bestMovie = true;

}
