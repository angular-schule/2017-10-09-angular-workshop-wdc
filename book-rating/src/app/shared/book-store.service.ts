import { Injectable } from '@angular/core';

import { Book } from './book';

@Injectable()
export class BookStoreService {

  constructor() { }

  getAllStatic(): Book[] {
    return [
      new Book('000', 'Angular', 'Grundlagen, fortgeschrittene Techniken und Best Practices', 5),
      new Book('111', 'React', 'von Facebook', 3)
    ];
  }

}
