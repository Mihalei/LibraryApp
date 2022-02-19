import { Book, CreateBook } from "../models/book";
import axios from "axios";

const baseURL = "https://620d7c7a20ac3a4eedc24efd.mockapi.io/api/v1/Book";

export async function getBooks(): Promise<Book[]> {
	return axios.get(baseURL).then((res) => res.data);
}

export async function getBookById(id: string): Promise<Book> {
	return axios.get(`${baseURL}/${id}`).then((res) => res.data);
}

export async function createBook(book: CreateBook): Promise<any> {
	return axios.post(baseURL, book).then((res) => res.data);
}

export async function updateBook(book: Book): Promise<any> {
	return axios.put(`${baseURL}/${book.id}`, book).then((res) => res.data);
}

export async function deleteBookById(id: string): Promise<any> {
	return axios.delete(`${baseURL}/${id}`).then((res) => res.data);
}
