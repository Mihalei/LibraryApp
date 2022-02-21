import { Borrowing, CreateBorrowing } from "../models/borrowing";
import axios from "axios";
import { API } from "../models/api";

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
	return axios.get(baseURL).then((res) => res.data);
}

async function getBorrowingById(id: string): Promise<Borrowing> {
	return axios.get(`${baseURL}/${id}`).then((res) => res.data);
}

async function createBorrowing(borrowing: CreateBorrowing): Promise<any> {
	return axios.post(baseURL, borrowing).then((res) => res.data);
}

async function updateBorrowing(borrowing: Borrowing): Promise<any> {
	return axios.put(`${baseURL}/${borrowing.id}`, borrowing).then((res) => res.data);
}

async function deleteBorrowingById(id: string): Promise<any> {
	return axios.delete(`${baseURL}/${id}`).then((res) => res.data);
}
