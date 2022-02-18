import { Borrowing, CreateBorrowing } from "../models/borrowing";
import axios from "axios";

const baseURL = "https://620d7c7a20ac3a4eedc24efd.mockapi.io/api/v1/Borrowing";

export const getBorrowings = () => {
	return axios.get(baseURL).then((res) => res.data);
};

export const getBorrowingById = (id: string) => {
	return axios.get(`${baseURL}/${id}`).then((res) => res.data);
};

export const createBorrowing = (borrowing: CreateBorrowing) => {
	return axios.post(baseURL, borrowing).then((res) => res.data);
};

export const updateBorrowing = (borrowing: Borrowing) => {
	return axios.put(`${baseURL}/${borrowing.id}`, borrowing).then((res) => res.data);
};

export const deleteBorrowingById = (id: string) => {
	return axios.delete(`${baseURL}/${id}`).then((res) => res.data);
};
