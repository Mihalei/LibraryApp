export interface Book {
	id: string;
	title: string;
	author: string;
	amount: number;
}

export const bookInit: Book = {
	id: "",
	title: "",
	author: "",
	amount: 0,
};

export interface CreateBook {
	title: string;
	author: string;
	amount: number;
}

export const createBookInit: CreateBook = {
	title: "",
	author: "",
	amount: 0,
};
