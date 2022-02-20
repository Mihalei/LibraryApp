import { Book } from "../models/book";
import { Borrowing } from "../models/borrowing";
import { Member } from "../models/member";

export const Books: Book[] = [
	{
		title: "sit nisi vero",
		author: "Mertie",
		amount: 3,
		id: "1",
	},
	{
		title: "nisi error ad",
		author: "Melyna",
		amount: 7,
		id: "2",
	},
	{
		title: "eos nisi quia",
		author: "Brisa",
		amount: 5,
		id: "3",
	},
	{
		title: "officiis illum veniam",
		author: "Cheyenne",
		amount: 5,
		id: "4",
	},
	{
		title: "quia quam ut",
		author: "Tyrique",
		amount: 9,
		id: "5",
	},
	{
		title: "modi inventore voluptate",
		author: "Jewel",
		amount: 6,
		id: "6",
	},
	{
		title: "et corrupti tempora",
		author: "Lester",
		amount: 13,
		id: "7",
	},
	{
		title: "cumque sit illo",
		author: "Jaron",
		amount: 1,
		id: "8",
	},
	{
		title: "quibusdam consequuntur enim",
		author: "Natalia",
		amount: 25,
		id: "9",
	},
	{
		title: "ut velit fugiat",
		author: "Esmeralda",
		amount: 11,
		id: "10",
	},
];

export const Members: Member[] = [
	{
		firstName: "Elenor",
		lastName: "Bashirian",
		dateOfBirth: new Date(1645240883),
		id: "1",
	},
	{
		firstName: "Domenico",
		lastName: "Goyette",
		dateOfBirth: new Date(1645240823),
		id: "2",
	},
	{
		firstName: "Gilbert",
		lastName: "Carter",
		dateOfBirth: new Date(1645240763),
		id: "3",
	},
	{
		firstName: "Emery",
		lastName: "Predovic",
		dateOfBirth: new Date(1645240703),
		id: "4",
	},
	{
		firstName: "Justice",
		lastName: "Durgan",
		dateOfBirth: new Date(1645240643),
		id: "5",
	},
	{
		firstName: "Lupe",
		lastName: "Schowalter",
		dateOfBirth: new Date(1645240583),
		id: "6",
	},
	{
		firstName: "Polly",
		lastName: "Gerhold",
		dateOfBirth: new Date(1645240523),
		id: "7",
	},
	{
		firstName: "Robyn",
		lastName: "Marquardt",
		dateOfBirth: new Date(1645240463),
		id: "8",
	},
	{
		firstName: "Meda",
		lastName: "Grady",
		dateOfBirth: new Date(1645240403),
		id: "9",
	},
	{
		firstName: "Bryon",
		lastName: "Mosciski",
		dateOfBirth: new Date(1645240343),
		id: "10",
	},
];

export const Borrowings: Borrowing[] = [
	{
		memberId: "1",
		bookId: "4",
		id: "1",
	},
	{
		memberId: "7",
		bookId: "2",
		id: "2",
	},
	{
		memberId: "3",
		bookId: "8",
		id: "3",
	},
	{
		memberId: "1",
		bookId: "2",
		id: "4",
	},
	{
		memberId: "5",
		bookId: "5",
		id: "5",
	},
	{
		memberId: "9",
		bookId: "3",
		id: "6",
	},
	{
		memberId: "7",
		bookId: "3",
		id: "7",
	},
	{
		memberId: "10",
		bookId: "6",
		id: "8",
	},
	{
		memberId: "3",
		bookId: "9",
		id: "9",
	},
	{
		memberId: "2",
		bookId: "7",
		id: "10",
	},
];

export function* nextBookId() {
	let nextId = Books.length;
	while (true) {
		yield ++nextId;
	}
}

export function* nextMemberId() {
	let nextId = Members.length;
	while (true) {
		yield ++nextId;
	}
}

export function* nextBorrowingId() {
	let nextId = Borrowings.length;
	while (true) {
		yield ++nextId;
	}
}
