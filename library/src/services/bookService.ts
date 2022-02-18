import { Book, CreateBook } from "../models/book";
import axios from "axios";

const baseURL = "https://620d7c7a20ac3a4eedc24efd.mockapi.io/api/v1/Book";

export const getBooks = () => {
	return axios.get(baseURL).then((res) => res.data);
};

export const getBookById = (id: string) => {
	return axios.get(`${baseURL}/${id}`).then((res) => res.data);
};

export const createBook = (book: CreateBook) => {
	return axios.post(baseURL, book).then((res) => res.data);
};

export const updateBook = (book: Book) => {
	return axios.put(`${baseURL}/${book.id}`, book).then((res) => res.data);
};

export const deleteBookById = (id: string) => {
	return axios.delete(`${baseURL}/${id}`).then((res) => res.data);
};
