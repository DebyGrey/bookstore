import { useState } from "react";
import { useDispatch } from "react-redux";
import { postBook, getBooks } from "../redux/books/booksSlice";
import styled from "styled-components";

const CreateABookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !author) return;
    try {
      await dispatch(postBook([title, author]));
      setTitle("");
      setAuthor("");
      await dispatch(getBooks());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Section className="form-wrapper">
      <h1 className="title">ADD NEW BOOK</h1>
      <form className="book-form">
        <input
          className="book-title"
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="book-author"
          type="text"
          placeholder="Book author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button className="add-book-btn" type="submit" onClick={handleSubmit}>
          ADD BOOK
        </button>
      </form>
    </Section>
  );
};

export default CreateABookForm;

const Section = styled.section`
  border-top: 1px solid #e8e8e8;
  margin: 2rem 6.25rem;
  .title {
    height: 1.5rem;
    margin: 1.813rem 32.75rem 1.188rem 0;
    font-size: 1.25rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.18px;
    color: #888;
  }
  .book-form {
    display: flex;
    justify-content: space-between;
    
    .add-book-btn {
      height: 2.813rem;
      border-radius: 3px;
      color: #fff;
      background-color: #2e90f0;
      width: 15.28%;
    }
  }
`;
