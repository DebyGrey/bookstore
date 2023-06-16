import PropTypes from "prop-types";
import { useState } from "react";

const CreateABookForm = ({ handleAddBookItem }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author) {
      handleAddBookItem(title, author);
      setTitle("");
      setAuthor("");
    }
  };

  return (
    <div className="form-wrapper">
      <h1>ADD NEW BOOK</h1>
      <form onSubmit={handleSubmit} className="book-form">
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option>Select Author</option>
          <option value="Suzanne Collins">Suzanne Collins</option>
          <option value="Frank Herbert">Frank Herbert</option>
        </select>
        <button className="add-book-btn" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

CreateABookForm.propTypes = {
  handleAddBookItem: PropTypes.func.isRequired,
};

export default CreateABookForm;
