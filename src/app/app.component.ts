import { Component, ElementRef, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  separatorKeysCodes: number[] = [ENTER, COMMA];
  langCtrl = new FormControl();
  filteredLangs: Observable<string[]>;
  languages: string[] = ['HTML'];
  allLanguages: string[] = ['HTML', 'CSS', 'JavaScript', 'PHP', 'Python'];

  @ViewChild('langInput') langInput: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredLangs = this.langCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allLanguages.slice())),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.languages.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.langCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.languages.indexOf(fruit);

    if (index >= 0) {
      this.languages.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.languages.push(event.option.viewValue);
    this.langInput.nativeElement.value = '';
    this.langCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allLanguages.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

}



























