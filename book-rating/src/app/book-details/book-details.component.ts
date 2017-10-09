import { Book } from '../shared/book';
import { Observable } from 'rxjs/Rx';
import { BookStoreService } from '../shared/book-store.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  books$: Observable<any>;
  isbn: string;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

  ngOnInit() {
    console.log('ngOnInit()');
    // this.isbn = this.route.snapshot.params.isbn;
    this.route.params.subscribe(params => this.isbn = params.isbn);
    this.books$ = Observable.interval(1000);
  }

}
