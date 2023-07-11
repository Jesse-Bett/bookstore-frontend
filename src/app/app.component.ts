import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bookstore-frontend';

  books: any[] = [
    { title: 'Book 1', author: 'Author 1', quantity: 10 },
    { title: 'Book 2', author: 'Author 2', quantity: 5 },
    { title: 'Book 3', author: 'Author 3', quantity: 3 },
  ];

  decrementQuantity(book: any) {
    if (book.quantity > 0) {
      book.quantity--;
    }
  }

  incrementQuantity(book: any) {
    book.quantity++;
  }
}
