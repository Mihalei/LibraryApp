import { Book, CreateBook } from "../models/book";
import axios from "axios";
import { API } from "../models/api";

//const baseURL = "https://620d7c7a20ac3a4eedc24efd.mockapi.io/api/v1/Book";
const baseURL = "http://localhost:3000/books";

export const bookAPI: API<Book> = {
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
	return axios
		.get(baseURL)
		.then((res) => res.data)
		.catch((error) => alert("Failed to fetch books."));
}

async function getBookById(id: string): Promise<Book> {
	return axios
		.get(`${baseURL}/${id}`)
		.then((res) => res.data)
		.catch((error) => alert(`Failed to fetch book with id ${id}.`));
}

async function createBook(book: CreateBook): Promise<any> {
	return axios
		.post(baseURL, book)
		.then((res) => res.data)
		.catch((error) => alert(`Failed to create book.`));
}

async function updateBook(book: Book): Promise<any> {
	return axios
		.put(`${baseURL}/${book.id}`, book)
		.then((res) => res.data)
		.catch((error) => alert(`Failed to update book with id ${book.id}.`));
}

async function deleteBookById(id: string): Promise<any> {
	return axios
		.delete(`${baseURL}/${id}`)
		.then((res) => res.data)
		.catch((error) => alert(`Failed to delete book with id ${id}.`));
}
