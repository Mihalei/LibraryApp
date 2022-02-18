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
