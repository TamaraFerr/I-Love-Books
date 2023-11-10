import prisma from "../database";
import { Book, CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";

export async function getBooks() {
  const result = await prisma.books.findMany();
  return result;
}

export async function getBook(id: number) {
  const result = await prisma.books.findFirst({
    where: { id }
  });

  return result;
}

export async function createBook(book: CreateBook) {
  const result = await prisma.books.create({
    data: book
  })
  return result;
}

export async function reviewBook(bookReview: CreateReview) {
  const { bookId, grade, review } = bookReview;
  const query = `
    UPDATE books 
    SET
      grade = $1,
      review = $2,
      read = true 
    WHERE id = $3
  `;

  const result = await connection.query(query, [grade, review, bookId]);
  return result.rowCount;

  // const result = await prisma.books.create({
  //   data: bookReview
  // })
  // return result;
}