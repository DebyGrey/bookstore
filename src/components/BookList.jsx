import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
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
    <Section>
      {isLoading ? (
        <LoadingSpinner>
          <Spinner />
        </LoadingSpinner>
      ) : (
        <>
          {booksArray.map((book) => (
            <Book key={book.id} book={book} />
          ))}
          <CreateABookForm />
        </>
      )}
    </Section>
  );
};

export default BookList;


const Section = styled.section``;

const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
