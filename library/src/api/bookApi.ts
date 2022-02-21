import { Book, CreateBook } from "../models/book";
import axios from "axios";
import { API } from "../models/api";

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
	return axios.get(baseURL).then((res) => res.data);
}

async function getBookById(id: string): Promise<Book> {
	return axios.get(`${baseURL}/${id}`).then((res) => res.data);
}

async function createBook(book: CreateBook): Promise<any> {
	return axios.post(baseURL, book).then((res) => res.data);
}

async function updateBook(book: Book): Promise<any> {
	return axios.put(`${baseURL}/${book.id}`, book).then((res) => res.data);
}

async function deleteBookById(id: string): Promise<any> {
	return axios.delete(`${baseURL}/${id}`).then((res) => res.data);
}
