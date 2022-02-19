import { Book, CreateBook } from "../models/book";
import {
	createBook,
	deleteBookById,
	getBookById,
	getBooks,
	updateBook as update,
} from "../api/bookApi";

export const getAllBooks = () => {
	try {
		return getBooks();
	} catch (error) {
		return undefined;
	}
};

export const getBook = (id: string) => {
	try {
		return getBookById(id);
	} catch (error) {
		return undefined;
	}
};

export const addNewBook = (book: CreateBook) => {
	try {
		return createBook(book);
	} catch (error) {
		return undefined;
	}
};

export const updateBook = (book: Book) => {
	try {
		return update(book);
	} catch (error) {
		return undefined;
	}
};

export const deleteBook = (id: string) => {
	try {
		return deleteBookById(id);
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
