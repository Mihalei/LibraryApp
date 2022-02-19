import { Borrowing, CreateBorrowing } from "../models/borrowing";
import { borrowingAPI as Api } from "../api/borrowingApi";
import { getBook, updateBook, getAllBooks } from "./bookService";

export const getAllBorrowings = () => {
	try {
		return Api.getAll();
	} catch (error) {
		return undefined;
	}
};

export const getBorrowing = (id: string) => {
	try {
		return Api.get(id);
	} catch (error) {
		return undefined;
	}
};

export async function borrowABook(borrowing: CreateBorrowing) {
	try {
		const book = await getBook(borrowing.bookId);
		const borrowingCount = await getBorrowingCountForBook(borrowing.bookId);
		if (book && borrowingCount && book.amount > borrowingCount) {
			return Api.create(borrowing);
		}
		return undefined;
	} catch (error) {
		return undefined;
	}
}

export const updateBorrowing = (borrowing: Borrowing) => {
	try {
		return Api.update(borrowing);
	} catch (error) {
		return undefined;
	}
};

export const returnABook = (borrowingId: string) => {
	try {
		return Api.delete(borrowingId);
	} catch (error) {
		return undefined;
	}
};

export async function getBorrowingCount() {
	try {
		const res = await getAllBorrowings();
		if (res) return res.length;
		return undefined;
	} catch (error) {
		return undefined;
	}
}

export async function getBorrowingCountForBook(bookId: string) {
	try {
		const res = await getAllBorrowings();
		if (res) {
			return res.filter((b) => b.bookId === bookId).length;
		}
		return undefined;
	} catch (error) {
		return undefined;
	}
}

export async function getBorrowingCountForMember(memberId: string) {
	try {
		const res = await getAllBorrowings();
		if (res) {
			return res.filter((b) => b.memberId === memberId).length;
		}
		return undefined;
	} catch (error) {
		return undefined;
	}
}

export async function getBooksBorrowedByMember(memberId: string) {
	try {
		const allBorrowings = await getAllBorrowings();
		const allBooks = await getAllBooks();
		if (allBorrowings && allBooks) {
			const bookIds = new Set(
				allBorrowings.filter((b) => b.memberId === memberId).map((b) => b.bookId)
			);
			return allBooks.filter((b) => bookIds.has(b.id));
		}
		return undefined;
	} catch (error) {
		return undefined;
	}
}

