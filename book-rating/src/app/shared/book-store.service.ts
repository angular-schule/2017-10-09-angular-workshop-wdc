import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

import { Book } from './book';

@Injectable()
export class BookStoreService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
     return this.http.get<any[]>('https://api.angular.schule/books')
      .map(rawBooks =>
        rawBooks.map(b =>
          new Book(b.isbn, b.title, b.description, b.rating)
        )
      ).delay(2000);
  }

  getAllStatic(): Book[] {
    return [
      new Book('000', 'Angular', 'Grundlagen, fortgeschrittene Techniken und Best Practices', 5),
      new Book('111', 'React', 'von Facebook', 3)
    ];
  }

}
