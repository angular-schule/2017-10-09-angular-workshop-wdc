import { Component, OnInit } from '@angular/core';

import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];
  url = 'https://angular.io';
  names = ['Tim', 'Marius', 'Michael', 'Daniel', 'Ferdinand'];

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.books = this.bs.getAllStatic();
  }

  reorderBooks(book: Book) {
    this.books.sort((a, b) => b.rating - a.rating);
  }

}
