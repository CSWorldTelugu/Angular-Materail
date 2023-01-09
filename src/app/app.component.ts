import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {


  constructor(private fb: FormBuilder) { }

  personalDetails = this.fb.group({
    firstName: ['', Validators.required]
  })

  contactDetails = this.fb.group({
    mobileNumber: [null, Validators.required]
  })




}



























