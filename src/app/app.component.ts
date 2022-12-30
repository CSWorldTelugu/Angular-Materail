import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from './form/form.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private dialog: MatDialog) {

  }
  result = null;

  openPopUp() {
    const ref = this.dialog.open(FormComponent, {
      width: '500px',
      height: '300px',
      disableClose: true,
      data: {
        'lang': 'Javascript'
      }

    })



    ref.afterClosed().subscribe(

      (data) => {
        console.log(data);
        this.result = data
      }
    )
  }








}



























