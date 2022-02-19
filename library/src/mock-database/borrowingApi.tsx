import { Borrowing, CreateBorrowing } from "../models/borrowing";
import { API } from "../models/api";
import { Borrowings, nextBorrowingId } from "./data";

export const mockBorrowingAPI: API<Borrowing> = {
	getAll: async function (): Promise<Borrowing[]> {
		return getBorrowings();
	},
	get: async function (id: string): Promise<Borrowing> {
		return getBorrowingById(id);
	},
	create: async function (borrowing: CreateBorrowing): Promise<any> {
		return createBorrowing(borrowing);
	},
	update: async function (borrowing: Borrowing): Promise<any> {
		return updateBorrowing(borrowing);
	},
	delete: async function (id: string): Promise<any> {
		return deleteBorrowingById(id);
	},
};

async function getBorrowings(): Promise<Borrowing[]> {
	return [...Borrowings];
}

async function getBorrowingById(id: string): Promise<Borrowing> {
	const borrowing = Borrowings.find((b) => b.id === id);
	if (borrowing) return borrowing;
	else return Promise.reject(`Borrowing with id ${id} was not found.`);
}

async function createBorrowing(borrowing: CreateBorrowing): Promise<any> {
	const newBorrowing: Borrowing = { ...borrowing, id: nextBorrowingId.toString() };
	Borrowings.push(newBorrowing);
	return Promise.resolve();
}

async function updateBorrowing(borrowing: Borrowing): Promise<any> {
	const borrowingIndex = Borrowings.findIndex((b) => b.id === borrowing.id);
	if (borrowingIndex > -1) {
		Borrowings[borrowingIndex] = borrowing;
		return Promise.resolve();
	} else return Promise.reject(`Borrowing with id ${borrowing.id} could not be updated.`);
}

async function deleteBorrowingById(id: string): Promise<any> {
	const borrowingIndex = Borrowings.findIndex((b) => b.id === id);
	if (borrowingIndex > -1) {
		Borrowings.splice(borrowingIndex, 1);
		return Promise.resolve();
	} else return Promise.reject(`Borrowing with id ${id} could not be deleted.`);
}
