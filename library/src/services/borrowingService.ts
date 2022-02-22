import { Borrowing, CreateBorrowing, DetailedBorrowing } from "../models/borrowing";
import { borrowingAPI as Api } from "../api/borrowingApi";
//import { mockBorrowingAPI as Api } from "../mock-database/borrowingApi";
import { getBook, getAllBooks } from "./bookService";
import { borrowingSearchOptions } from "../models/search";
import { getAllMembers } from "./memberService";

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

export async function numberOfAvailableCopies(bookId: string) {
	const book = await getBook(bookId);
	const borrowingCount = await getBorrowingCountForBook(bookId);
	if (book && borrowingCount !== undefined) return book.amount - borrowingCount;
	else return undefined;
}

export async function borrowABook(borrowing: CreateBorrowing) {
	try {
		const booksLeftCount = await numberOfAvailableCopies(borrowing.bookId);
		if (booksLeftCount !== undefined && booksLeftCount > 0) {
			return Api.create(borrowing);
		} else if (booksLeftCount !== undefined && booksLeftCount <= 0)
			alert(
				`Book with id ${borrowing.bookId} is unavailable. Please wait until someone returns it.`
			);
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

export async function getDetailedBorrowings(borrowings: Borrowing[]) {
	try {
		const books = await getAllBooks();
		const members = await getAllMembers();
		if (books && members) {
			const detailedBorrowings: DetailedBorrowing[] = [];
			borrowings.forEach((b) => {
				let detailedBorrowing: DetailedBorrowing = {
					borrowing: b,
					bookTitle: "",
					memberName: "",
				};
				const book = books.find((bk) => bk.id === b.bookId);
				if (book) detailedBorrowing.bookTitle = book.title;
				else detailedBorrowing.bookTitle = "";
				const member = members.find((m) => m.id === b.memberId);
				if (member) detailedBorrowing.memberName = `${member.firstName} ${member.lastName}`;
				else detailedBorrowing.memberName = "";
				detailedBorrowings.push(detailedBorrowing);
			});
			return detailedBorrowings;
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

export async function getBorrowingsOfBook(bookId: string) {
	try {
		const allBorrowings = await getAllBorrowings();
		if (allBorrowings) {
			return allBorrowings.filter((b) => b.bookId === bookId);
		}
		return undefined;
	} catch (error) {
		return undefined;
	}
}

export async function getBorrowingsByMember(memberId: string) {
	try {
		const allBorrowings = await getAllBorrowings();
		if (allBorrowings) {
			return allBorrowings.filter((b) => b.memberId === memberId);
		}
		return undefined;
	} catch (error) {
		return undefined;
	}
}

export async function getBorrowings(searchType: string, searchValue: string) {
	switch (searchType) {
		case borrowingSearchOptions.ById:
			const rBI = await getBorrowing(searchValue);
			if (rBI) {
				const resBI = await getDetailedBorrowings([rBI]);
				return resBI;
			} else return undefined;
		case borrowingSearchOptions.ByBookId:
			const rBBI = await getBorrowingsOfBook(searchValue);
			if (rBBI) {
				const resBBI = await getDetailedBorrowings(rBBI);
				return resBBI;
			} else return undefined;
		case borrowingSearchOptions.ByMemberId:
			const rBMI = await getBorrowingsByMember(searchValue);
			if (rBMI) {
				const resBMI = await getDetailedBorrowings(rBMI);
				return resBMI;
			} else return undefined;
		default:
			const rA = await getAllBorrowings();
			if (rA) {
				const resA = await getDetailedBorrowings(rA);
				return resA;
			} else return undefined;
	}
}
