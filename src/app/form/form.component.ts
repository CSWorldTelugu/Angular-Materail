import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<FormComponent>) { }

  ngOnInit(): void {

    console.log(this.data)
  }

  email;


  closeManually() {
    this.ref.close(this.email)

  }

}
