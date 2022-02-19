import { Book, CreateBook } from "../models/book";
import { API } from "../models/api";
import { Books, nextBookId } from "./data";

export const mockBookAPI: API<Book> = {
	getAll: async function (): Promise<Book[]> {
		return getBooks();
	},
	get: async function (id: string): Promise<Book> {
		return getBookById(id);
	},
	create: async function (book: CreateBook): Promise<any> {
		return createBook(book);
	},
	update: async function (book: Book): Promise<any> {
		return updateBook(book);
	},
	delete: async function (id: string): Promise<any> {
		return deleteBookById(id);
	},
};

async function getBooks(): Promise<Book[]> {
	return [...Books];
}

async function getBookById(id: string): Promise<Book> {
	const book = Books.find((b) => b.id === id);
	if (book) return book;
	else return Promise.reject(`Book with id ${id} was not found.`);
}

async function createBook(book: CreateBook): Promise<any> {
	const newBook: Book = { ...book, id: nextBookId.toString() };
	Books.push(newBook);
	return Promise.resolve();
}

async function updateBook(book: Book): Promise<any> {
	const bookIndex = Books.findIndex((b) => b.id === book.id);
	if (bookIndex > -1) {
		Books[bookIndex] = book;
		return Promise.resolve();
	} else return Promise.reject(`Book with id ${book.id} could not be updated.`);
}

async function deleteBookById(id: string): Promise<any> {
	const bookIndex = Books.findIndex((b) => b.id === id);
	if (bookIndex > -1) {
		Books.splice(bookIndex, 1);
		return Promise.resolve();
	} else return Promise.reject(`Book with id ${id} could not be deleted.`);
}
