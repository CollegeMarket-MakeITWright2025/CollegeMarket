import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books',
  imports: [CommonModule, FormsModule,],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  
  
    book = {
      name: '',
      author: '',
      isbn: '',
      price: 0
    };
  
    // Array to store the list of books up for sale
    booksForSale: Array<{ name: string, author: string, isbn: string, price: number }> = [];
  
    // Method to handle the form submission
    onSubmit(): void {
      if (this.book.name && this.book.author && this.book.isbn && this.book.price) {
        this.booksForSale.push({ ...this.book });  // Add book to the list
        this.resetForm(); // Reset the form after adding
      }
    }
  
    // Method to reset the form fields
    resetForm(): void {
      this.book = { name: '', author: '', isbn: '', price: 0 };
    }
  }
  
