import { Book, CreateBook } from "../models/book";
import { bookAPI as Api } from "../api/bookApi";
//import { mockBookAPI as Api } from "../mock-database/bookApi";

export const getAllBooks = () => {
	try {
		return Api.getAll();
	} catch (error) {
		return undefined;
	}
};

export const getBook = (id: string) => {
	try {
		return Api.get(id);
	} catch (error) {
		return undefined;
	}
};

export const addNewBook = (book: CreateBook) => {
	try {
		return Api.create(book);
	} catch (error) {
		return undefined;
	}
};

export const updateBook = (book: Book) => {
	try {
		return Api.update(book);
	} catch (error) {
		return undefined;
	}
};

export const deleteBook = (id: string) => {
	try {
		return Api.delete(id);
	} catch (error) {
		return undefined;
	}
};

export async function getBookCount() {
	try {
		const res = await getAllBooks();
		if (res) return res.length;
		return undefined;
	} catch (error) {
		return undefined;
	}
}

export async function getAllBooksFromAuthor(authorName: string) {
	try {
		const res = await getAllBooks();
		if (res) {
			return res.filter(
				(b) => b.author.toLowerCase().trim() === authorName.toLowerCase().trim()
			);
		}
		return undefined;
	} catch (error) {
		return undefined;
	}
}

export async function getAllBooksWithTitle(bookTitle: string) {
	try {
		const res = await getAllBooks();
		if (res) {
			return res.filter(
				(b) => b.title.toLowerCase().trim() === bookTitle.toLowerCase().trim()
			);
		}
		return undefined;
	} catch (error) {
		return undefined;
	}
}

export async function getSetOfBookAuthors() {
	try {
		const res = await getAllBooks();
		if (res) {
			return new Set(res.map((b) => b.author.toLowerCase().trim()));
		}
		return undefined;
	} catch (error) {
		return undefined;
	}
}
