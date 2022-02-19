import { Borrowing, CreateBorrowing } from "../models/borrowing";
import axios from "axios";

const baseURL = "https://620d7c7a20ac3a4eedc24efd.mockapi.io/api/v1/Borrowing";

export async function getBorrowings(): Promise<Borrowing[]> {
	return axios.get(baseURL).then((res) => res.data);
}

export async function getBorrowingById(id: string): Promise<Borrowing> {
	return axios.get(`${baseURL}/${id}`).then((res) => res.data);
}

export async function createBorrowing(borrowing: CreateBorrowing): Promise<any> {
	return axios.post(baseURL, borrowing).then((res) => res.data);
}

export async function updateBorrowing(borrowing: Borrowing): Promise<any> {
	return axios.put(`${baseURL}/${borrowing.id}`, borrowing).then((res) => res.data);
}

export async function deleteBorrowingById(id: string): Promise<any> {
	return axios.delete(`${baseURL}/${id}`).then((res) => res.data);
}
