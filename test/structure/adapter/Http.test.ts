import axios from "axios";

test("Should to test the API", async function () {
    const response = await axios.get("http://localhost:3005/books");
    
	const books = response.data;
	expect(books).toHaveLength(3);
	const [book1, book2, book3] = books;
	expect(book1.title).toBe("Clean Code");
	expect(book2.title).toBe("Refactoring");
	expect(book3.title).toBe("Implementing Domain-Driven Design");
});
