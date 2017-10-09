import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.books = [
      new Book('000', 'Angular', 'Grundlagen, fortgeschrittene Techniken und Best Practices', 5),
      new Book('111', 'React', 'von Facebook', 3)
    ];
  }

  reorderBooks(book: Book) {
    this.books.sort((a, b) => b.rating - a.rating);
  }

}
