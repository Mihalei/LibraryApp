export interface Borrowing {
	id: string;
	bookId: string;
	memberId: string;
}

export const borrowingInit: Borrowing = {
	id: "",
	bookId: "",
	memberId: "",
};

export interface CreateBorrowing {
	bookId: string;
	memberId: string;
}

export const createBorrowingInit: CreateBorrowing = {
	bookId: "",
	memberId: "",
};

export interface DetailedBorrowing {
	borrowing: Borrowing;
	bookTitle: string;
	memberName: string;
}

export const detailedBorrowingInit: DetailedBorrowing = {
	borrowing: borrowingInit,
	bookTitle: "",
	memberName: "",
};
