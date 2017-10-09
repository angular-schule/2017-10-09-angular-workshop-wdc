import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input() book: Book;

  rateUp() {
    this.book.rateUp();
  }

  rateDown() {
    this.book.rateDown();
  }

  getStars(rating: number) {
    return new Array(rating);
  }

}
