import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);
  const shelves = [
    { title: "Currently Reading", shelfName: "currentlyReading" },
    { title: "Want to Read", shelfName: "wantToRead" },
    { title: "Read", shelfName: "read" },
  ];

  useEffect(() => {
    BooksAPI.getAll().then((data) => {
      setBooks(data);
    });
  }, []);

  const handleChange = (shelf, book) => {
    book.shelf = shelf;
    BooksAPI.update(book, shelf).then(() => {
      setBooks([...books.filter((b) => b.id !== book.id), book]);
    });
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<Home shelves={shelves} books={books} handleChange={handleChange} />}
        />
        <Route
          path="/search"
          element={<Search books={books} handleChange={handleChange} />}
        />
      </Routes>
    </div>
  );
}

export default App;
