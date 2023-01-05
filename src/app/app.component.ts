import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar/snackbar.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {



  constructor(private snackbar: MatSnackBar) { }

  openSnackBar() {

    this.snackbar.openFromComponent(
      SnackbarComponent

    )

  }


}



























