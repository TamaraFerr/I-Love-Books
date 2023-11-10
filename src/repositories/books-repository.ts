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
  const result = await prisma.books.create({
    data: bookReview
  })
  return result;
}