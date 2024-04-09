import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Bookshelf from "../components/BookShelf";

const Home = (props) => {
  const { shelves, books, handleChange } = props;

  return (
    <div className="list-books">
      <div className="book-shelf">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map((shelf, key) => (
              <Bookshelf
                key={key}
                shelfTitle={shelf.title}
                books={
                  books &&
                  books.filter((book) => book && book.shelf === shelf.shelfName)
                }
                handleChange={handleChange}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default Home;

Home.propTypes = {
  shelves: PropTypes.array.isRequired,
  books: PropTypes.array,
  handleChange: PropTypes.func.isRequired,
};
