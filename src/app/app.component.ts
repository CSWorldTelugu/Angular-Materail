import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {

  }
  products: any
  ngOnInit(): void {
    this.http.get('https://fakestoreapi.com/products/category/electronics')
      .subscribe(
        (data) => {
          console.log(data)
          this.products = data
        }
      )
  }




}



























