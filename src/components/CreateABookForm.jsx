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
    <Section>
      <h1 className="title">ADD NEW BOOK</h1>
      <form className="form">
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
        <button className="add-book" type="submit" onClick={handleSubmit}>
          ADD BOOK
        </button>
      </form>
    </Section>
  );
};

export default CreateABookForm;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-top: 1px solid #e8e8e8;
  margin: 2rem 3rem;
  padding: 2rem 1.5rem;
  height: 150px;
  background-color: #fafafa;
  .title {
    height: 1.5rem;
    // margin: 1.813rem 32.75rem 1.188rem 0;
    font-size: 1.25rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.18px;
    color: #888;
  }
  .form {
    display: flex;
    justify-content: space-around;

    .book-title {
      height: 50px;
      border-radius: 4px;
      border: solid 1px var(--white);
      background-color: #fff;
      padding-left: 1rem;
      width: 55.15%;
    }
    .book-author {
      height: 50px;
      border-radius: 4px;
      border: solid 1px var(--white);
      background-color: #fff;
      padding-left: 1rem;
      width: 23.67%;
    }
    .add-book {
      height: 50;
      border-radius: 3px;
      color: #fff;
      background-color: #2e90f0;
      width: 15.28%;
    }
  }
`;