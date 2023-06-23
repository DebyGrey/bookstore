import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Book from "./Book";
import CreateABookForm from "./CreateABookForm";
import { getBooks } from "../redux/books/booksSlice";

const BookList = () => {
  const dispatch = useDispatch();

  const { books, isLoading } = useSelector((store) => store.bookstore);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const booksArray = Object.entries(books).reduce((acc, [id, bookList]) => {
    const booksWithId = bookList.map((book) => ({ ...book, id }));
    return [...acc, ...booksWithId];
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {booksArray.map((book) => (
            <Book key={book.id} book={book} />
          ))}
          <CreateABookForm />
        </>
      )}
    </div>
  );
};

export default BookList;
