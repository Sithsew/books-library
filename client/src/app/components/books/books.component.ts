import { Component } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  books?: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.retrieveBooks();
  }

  retrieveBooks(): void {
    this.bookService.getAll()
      .subscribe(
        (data: any) => {
          this.books = data.data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
