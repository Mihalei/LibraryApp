import { Borrowing, CreateBorrowing } from "../models/borrowing";
import {
	createBorrowing,
	deleteBorrowingById,
	getBorrowingById,
	getBorrowings,
	updateBorrowing as update,
} from "../api/borrowingApi";
import { getBook, updateBook } from "./bookService";
import { getBooks } from "../api/bookApi";

export const getAllBorrowings = () => {
	try {
		return getBorrowings();
	} catch (error) {
		return undefined;
	}
};

export const getBorrowing = (id: string) => {
	try {
		return getBorrowingById(id);
	} catch (error) {
		return undefined;
	}
};

export async function borrowABook(borrowing: CreateBorrowing) {
	try {
		const book = await getBook(borrowing.bookId);
		const borrowingCount = await getBorrowingCountForBook(borrowing.bookId);
		if (book && borrowingCount && book.amount > borrowingCount) {
			return createBorrowing(borrowing);
		}
		return undefined;
	} catch (error) {
		return undefined;
	}
}

export const updateBorrowing = (borrowing: Borrowing) => {
	try {
		return update(borrowing);
	} catch (error) {
		return undefined;
	}
};

export const returnABook = (borrowingId: string) => {
	try {
		return deleteBorrowingById(borrowingId);
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
		const allBooks = await getBooks();
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

