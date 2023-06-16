import { useState } from "react";

const CreateABookForm = ( ) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

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
        <button className="add-book-btn" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default CreateABookForm;
