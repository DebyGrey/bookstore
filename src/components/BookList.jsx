import { useEffect } from "react";
import { useSelector } from "react-redux";
import Book from "./Book";
import CreateABookForm from "./CreateABookForm";

const BookList = () => {
  const books = useSelector((store) => store.bookstore.books);

   const saveBooksToLocalStorage = (items) => {
     localStorage.setItem("booksData", JSON.stringify(items));
   };
  
   useEffect(() => {
     saveBooksToLocalStorage(books);
   }, [books]);

  return (
    <div>
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
      <CreateABookForm />
    </div>
  );
};

export default BookList;
