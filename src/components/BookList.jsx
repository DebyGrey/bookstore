import { useState, useEffect } from 'react';
import Book from './Book';
import { v4 as uuidv4 } from "uuid";
import CreateABookForm from './CreateABookForm';

const BookList = () => {
  // Retrieve stored books from local storage
  const getBooks = () => {
    const temp = localStorage.getItem("books");
    const storedBooks = JSON.parse(temp);
    return storedBooks || [];
  };
  const [books, setBooks] = useState(getBooks());

  // Update local storage when books state changes
  useEffect(() => {
    const temp = JSON.stringify(books);
    localStorage.setItem("books", temp);
  }, [books]);

  // Add Book
  const handleAddBookItem = (title, author) => {
    const newBook = {
      id: uuidv4(),
      genre: "Action",
      title,
      author,
      completed: "69%",
      chapter: "Chapter 17",
    };
    setBooks([...books, newBook]);
  };

  // Remove Book
  const handleRemoveBook = (id) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
      ))}
      <CreateABookForm handleAddBookItem={handleAddBookItem} />
    </div>
  );
}
export default BookList;

