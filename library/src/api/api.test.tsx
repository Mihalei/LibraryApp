import { Book, CreateBook } from "../models/book";
import { Borrowing, CreateBorrowing } from "../models/borrowing";
import { Member, CreateMember } from "../models/member";
import { bookAPI } from "./bookApi";
import { borrowingAPI } from "./borrowingApi";
import { memberAPI } from "./memberApi";

it("Book CRUD tests", async () => {
	// GET *
	const books = await bookAPI.getAll();
	const bookCount = books.length;
	// there are books expected to be in mock database initially
	const numberOfExpectedBooks = 50;
	expect(bookCount).toEqual(numberOfExpectedBooks);

	// GET
	const book = await bookAPI.get("1");
	// book with id 1 is expected to be in mock database initially
	expect(book).toBeTruthy();
	if (book) expect(book.id).toBe("1");

	// CREATE
	const newBook: CreateBook = {
		title: "React",
		author: "Miha",
		amount: 5,
	};
	await bookAPI.create(newBook);
	// check if number of books increased by 1
	let res = await bookAPI.getAll();
	expect(res.length).toEqual(bookCount + 1);
	// check if book with newly added title exists
	expect(res.filter((b) => b.title === "React").length).toBeGreaterThan(0);
	// check if id of newly created book is correctly generated
	const newBookId = res.find(
		(b) => b.title === "React" && b.author === "Miha" && b.amount === 5
	)?.id;
	expect(newBookId).toBeTruthy();
	if (newBookId) expect(Number.parseInt(newBookId)).toBeGreaterThan(bookCount);

	// UPDATE
	let updatedBook;
	// updating newly added book
	if (newBookId !== undefined) {
		const bookUpdate: Book = {
			id: newBookId,
			title: "C#",
			author: "Miha",
			amount: 1,
		};
		await bookAPI.update(bookUpdate);
		// check that title and amount were updated correctly
		updatedBook = await bookAPI.get(newBookId);
		expect(updatedBook.title).toEqual("C#");
		expect(updatedBook.amount).toEqual(1);
	}

	// DELETE
	let deletedBookIndex;
	// deleting newly added book
	if (newBookId !== undefined) {
		await bookAPI.delete(newBookId);
		// check if number of books decreased by 1
		res = await bookAPI.getAll();
		expect(res.length).toEqual(bookCount);
		// check if deleted book is still there
		deletedBookIndex = res.findIndex((b) => b.id === newBookId);
		expect(deletedBookIndex).toEqual(-1);
	}
});

it("Borrowing CRUD tests", async () => {
	// GET *
	const borrowings = await borrowingAPI.getAll();
	const borrowingCount = borrowings.length;
	// there are borrowings expected to be in mock database initially
	const numberOfExpectedBorrowings = 25;
	expect(borrowingCount).toEqual(numberOfExpectedBorrowings);

	// GET
	const borrowing = await borrowingAPI.get("1");
	// borrowing with id 1 is expected to be in mock database initially
	expect(borrowing).toBeTruthy();
	if (borrowing) expect(borrowing.id).toBe("1");

	// CREATE
	const newBorrowing: CreateBorrowing = {
		bookId: "1",
		memberId: "1",
	};
	await borrowingAPI.create(newBorrowing);
	// check if number of borrowings increased by 1
	let res = await borrowingAPI.getAll();
	expect(res.length).toEqual(borrowingCount + 1);
	// check if borrowing with newly added bookId and memberId exists
	expect(res.filter((b) => b.bookId === "1" && b.memberId === "1").length).toBeGreaterThan(0);
	// check if id of newly created borrowing is correctly generated
	const newBorrowingId = res.find((b) => b.bookId === "1" && b.memberId === "1")?.id;
	expect(newBorrowingId).toBeTruthy();
	if (newBorrowingId) expect(Number.parseInt(newBorrowingId)).toBeGreaterThan(borrowingCount);

	// UPDATE
	let updatedBorrowing;
	// updating newly added borrowing
	if (newBorrowingId !== undefined) {
		const borrowingUpdate: Borrowing = {
			id: newBorrowingId,
			bookId: "2",
			memberId: "2",
		};
		await borrowingAPI.update(borrowingUpdate);
		// check that bookId and memberId were updated correctly
		updatedBorrowing = await borrowingAPI.get(newBorrowingId);
		expect(updatedBorrowing.bookId).toEqual("2");
		expect(updatedBorrowing.memberId).toEqual("2");
	}

	// DELETE
	let deletedBorrowingIndex;
	// deleting newly added borrowing
	if (newBorrowingId !== undefined) {
		await borrowingAPI.delete(newBorrowingId);
		// check if number of borrowings decreased by 1
		res = await borrowingAPI.getAll();
		expect(res.length).toEqual(borrowingCount);
		// check if deleted borrowing is still there
		deletedBorrowingIndex = res.findIndex((b) => b.id === newBorrowingId);
		expect(deletedBorrowingIndex).toEqual(-1);
	}
});

it("Member CRUD tests", async () => {
	// GET *
	const members = await memberAPI.getAll();
	const memberCount = members.length;
	// there are members expected to be in mock database initially
	const numberOfExpectedMembers = 50;
	expect(memberCount).toEqual(numberOfExpectedMembers);

	// GET
	const member = await memberAPI.get("1");
	// member with id 1 is expected to be in mock database initially
	expect(member).toBeTruthy();
	if (member) expect(member.id).toBe("1");

	// CREATE
	const newMember: CreateMember = {
		firstName: "Ken",
		lastName: "Kaneki",
		dateOfBirth: "1995-01-07",
	};
	await memberAPI.create(newMember);
	// check if number of members increased by 1
	let res = await memberAPI.getAll();
	expect(res.length).toEqual(memberCount + 1);
	// check if member with newly added firstName and lastName exists
	expect(
		res.filter((m) => m.firstName === "Ken" && m.lastName === "Kaneki").length
	).toBeGreaterThan(0);
	// check if id of newly created member is correctly generated
	const newMemberId = res.find(
		(m) => m.firstName === "Ken" && m.lastName === "Kaneki" && m.dateOfBirth === "1995-01-07"
	)?.id;
	expect(newMemberId).toBeTruthy();
	if (newMemberId) expect(Number.parseInt(newMemberId)).toBeGreaterThan(memberCount);

	// UPDATE
	let updatedMember;
	// updating newly added member
	if (newMemberId !== undefined) {
		const memberUpdate: Member = {
			id: newMemberId,
			firstName: "Sen",
			lastName: "Takatsuki",
			dateOfBirth: "1995-01-07",
		};
		await memberAPI.update(memberUpdate);
		// check that firstName and lastName were updated correctly
		updatedMember = await memberAPI.get(newMemberId);
		expect(updatedMember.firstName).toEqual("Sen");
		expect(updatedMember.lastName).toEqual("Takatsuki");
	}

	// DELETE
	let deletedMemberIndex;
	// deleting newly added member
	if (newMemberId !== undefined) {
		await memberAPI.delete(newMemberId);
		// check if number of members decreased by 1
		res = await memberAPI.getAll();
		expect(res.length).toEqual(memberCount);
		// check if deleted member is still there
		deletedMemberIndex = res.findIndex((m) => m.id === newMemberId);
		expect(deletedMemberIndex).toEqual(-1);
	}
});
