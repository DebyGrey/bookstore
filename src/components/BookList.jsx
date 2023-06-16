import { useState, useEffect } from "react";
import Book from "./Book";
import { v4 as uuidv4 } from "uuid";
import CreateABookForm from "./CreateABookForm";
 const storedBooks = [
   {
     id: uuidv4(),
     genre: "Action",
     title: "The Hunger Games",
     author: "Suzanne Collins",
     completed: "64%",
     chapter: "Chapter 17",
   },
   {
     id: uuidv4(),
     genre: "Action",
     title: "Dune",
     author: "Frank Herbert",
     completed: "8%",
     chapter: "Chapter 3: 'Alesson learned'",
   },
   {
     id: uuidv4(),
     genre: "Action",
     title: "Capital in The Twenty-First Century",
     author: "Suzanne Collins",
     completed: "0%",
     chapter: "Introduction",
   },
 ];

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(storedBooks);
  },[]);

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <CreateABookForm />
    </div>
  );
};

export default BookList;
