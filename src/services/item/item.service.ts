import { Injectable } from '@nestjs/common';
import { Book } from 'src/models/book.model';

@Injectable()
export class ItemService {
    private books: Book[] = [
        {
            id: "1",
            name: 'Sword Art Online',
            price: '120000',
            publisher: 'IPM'
        },
        {
            id: "2",
            name: 'Eighty Six',
            price: '100000',
            publisher: 'IPM'
        }
    ];

    getAllBook(): Book[] {
        return this.books;
    }

    getBookById(id: string): Book[] {
        return this.books.filter(book => book.id === id);
    }

    createBook(book: Book) {
        this.books.push(book);
    }

    updateBook(bookData: any) {
        let bookFind = this.books.find(book => bookData.id === book.id);
        Object.assign(bookFind, bookData); //check bên bookData, replace qua bookFind
    }

    deleteBookById(id: string) {
        return this.books = this.books.filter(book => book.id !== id);
    }
}
