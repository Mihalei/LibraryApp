import { Borrowing, CreateBorrowing } from "../models/borrowing";
import axios from "axios";
import { API } from "../models/api";

//const baseURL = "https://620d7c7a20ac3a4eedc24efd.mockapi.io/api/v1/Borrowing";
const baseURL = "http://localhost:3000/borrowings";

export const borrowingAPI: API<Borrowing> = {
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
	return axios
		.get(baseURL)
		.then((res) => res.data)
		.catch((error) => alert(`Failed to fetch borrowings.`));
}

async function getBorrowingById(id: string): Promise<Borrowing> {
	return axios
		.get(`${baseURL}/${id}`)
		.then((res) => res.data)
		.catch((error) => alert(`Failed to fetch borrowing with id ${id}.`));
}

async function createBorrowing(borrowing: CreateBorrowing): Promise<any> {
	return axios
		.post(baseURL, borrowing)
		.then((res) => res.data)
		.catch((error) => alert(`Failed to create borrowing.`));
}

async function updateBorrowing(borrowing: Borrowing): Promise<any> {
	return axios
		.put(`${baseURL}/${borrowing.id}`, borrowing)
		.then((res) => res.data)
		.catch((error) => alert(`Failed to update borrowing with id ${borrowing.id}.`));
}

async function deleteBorrowingById(id: string): Promise<any> {
	return axios
		.delete(`${baseURL}/${id}`)
		.then((res) => alert("Book is returned successfully!"))
		.catch((error) => alert(`Failed to delete borrowing with id ${id}.`));
}
