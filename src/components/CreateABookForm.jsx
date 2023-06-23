import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/books/booksSlice";

const CreateABookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return;
    dispatch(addBook([title, author]));
    setTitle("");
    setAuthor("");
  };


  return (
    <div className="form-wrapper">
      <h1>ADD NEW BOOK</h1>
      <form className="book-form">
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Book author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button className="add-book" type="submit" onClick={handleSubmit}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default CreateABookForm;
