import { Book, CreateBook } from "../models/book";
import { Borrowing, CreateBorrowing } from "../models/borrowing";
import { Member, CreateMember } from "../models/member";
import {
	addNewBook,
	deleteBook,
	getAllBooks,
	getAllBooksFromAuthor,
	getAllBooksWithTitle,
	getBook,
	getBookCount,
	getSetOfBookAuthors,
	updateBook,
} from "./bookService";
import {
	getBooksBorrowedByMember,
	getBorrowingCountForMember,
	getBorrowingCountForBook,
	getBorrowingCount,
	returnABook,
	updateBorrowing,
	borrowABook,
	getBorrowing,
	getAllBorrowings,
} from "./borrowingService";
import {
	getMembersYoungerThan,
	getMemberCount,
	deleteMember,
	updateMember,
	addNewMember,
	getMember,
	getAllMembers,
} from "./memberService";

it("Book Services tests", async () => {
	let res: any;

	res = await getAllBooks();
	//expect(res).toBeTruthy();

	res = await getBook("1");
	//expect(res).toBeTruthy();

	res = await addNewBook({
		title: "Stranger Things",
		author: "Harry Potter",
		amount: 7,
	});
	//expect(res).toBeTruthy();

	res = await updateBook({
		id: "1",
		title: "Football",
		author: "Lionel Messi",
		amount: 2,
	});
	//expect(res).toBeTruthy();

	res = await deleteBook("1");
	//expect(res).toBeTruthy();

	res = await getBookCount();
	//expect(res).toBeTruthy();

	res = await getAllBooksFromAuthor("Cheyenne");
	//expect(res).toBeTruthy();

	res = await getAllBooksWithTitle("quia quam ut");
	//expect(res).toBeTruthy();

	res = await getSetOfBookAuthors();
	//expect(res).toBeTruthy();
});

it("Borrowing Services tests", async () => {
	let res: any;

	res = await getAllBorrowings();
	//expect(res).toBeTruthy();

	res = await getBorrowing("1");
	//expect(res).toBeTruthy();

	res = await borrowABook({
		bookId: "2",
		memberId: "1",
	});
	//expect(res).toBeTruthy();

	res = await updateBorrowing({
		id: "1",
		bookId: "2",
		memberId: "2",
	});
	//expect(res).toBeTruthy();

	res = await returnABook("1");
	//expect(res).toBeTruthy();

	res = await getBorrowingCount();
	//expect(res).toBeTruthy();

	res = await getBorrowingCountForBook("5");
	//expect(res).toBeTruthy();

	res = await getBorrowingCountForMember("1");
	//expect(res).toBeTruthy();

	res = await getBooksBorrowedByMember("1");
	//expect(res).toBeTruthy();
});

it("Member Services tests", async () => {
	let res: any;

	res = await getAllMembers();
	//expect(res).toBeTruthy();

	res = await getMember("1");
	//expect(res).toBeTruthy();

	res = await addNewMember({
		firstName: "Christiano",
		lastName: "Ronaldo",
		dateOfBirth: new Date(),
	});
	//expect(res).toBeTruthy();

	res = await updateMember({
		id: "1",
		firstName: "Elon",
		lastName: "Musk",
		dateOfBirth: new Date(),
	});
	//expect(res).toBeTruthy();

	res = await deleteMember("1");
	//expect(res).toBeTruthy();

	res = await getMemberCount();
	//expect(res).toBeTruthy();

	res = await getMembersYoungerThan(50);
	//expect(res).toBeTruthy();
});
