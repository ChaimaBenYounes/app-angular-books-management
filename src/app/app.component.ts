import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {

    const config = {
      apiKey: "AIzaSyAjKR8hVNNogyTZMUfqEhnxwoCTWiBcm2o",
      authDomain: "app-books-bf6d4.firebaseapp.com",
      databaseURL: "https://app-books-bf6d4.firebaseio.com",
      projectId: "app-books-bf6d4",
      storageBucket: "app-books-bf6d4.appspot.com",
      messagingSenderId: "1099365692331"
    };
    firebase.initializeApp(config);

  }
}
