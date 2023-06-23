import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeBook } from "../redux/books/booksSlice";
import Button from "./Button";


const Book = ({ book }) => {
  const dispatch = useDispatch();
  
  return (
    <div>
      <div className="book-left">
        <div className="book-details-container">
          <div className="book-details">
            <h6 className="genre">{book.category}</h6>
            <h3 className="title">{book.title}</h3>
            <p className="author">{book.author}</p>
          </div>
          <div className="interactions">
            <button className="comments" type="button">Comments</button>|
            <Button
              className="remove"
              onClick={() => {
                dispatch(removeBook(book.item_id));
              }}
            >
              Remove
            </Button>|
            <button className="edit"  type="button">
              Edit
            </button>
          </div>
        </div>
        <div className="progress-bar">
          <CircularProgressbar
            value={parseInt(book.completed, 10)}
            text={`${book.completed}`}
          />
        </div>
      </div>
      <div className="book-right">
        <h4>Current Chapter</h4>
        <p>{book.chapter}</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    chapter: PropTypes.string.isRequired,
    completed: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
