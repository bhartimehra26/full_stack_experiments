import { useState } from "react";
import AddBookForm from "./components/AddBookForm";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const addBook = (book) => {
    setBooks([...books, { id: Date.now(), ...book }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur p-8 rounded-3xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-4">
           Library Management
        </h1>
        <SearchBar search={search} setSearch={setSearch} />
        <AddBookForm addBook={addBook} />
        <BookList books={filteredBooks} removeBook={removeBook} />
      </div>
    </div>
  );
}
export default App;