import BookCard from "./BookCard";
function BookList({ books, removeBook }) {
  if (books.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">
        No books found.
      </p>
    );
  }
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {books.map((book) => (
        <BookCard key={book.id} book={book} removeBook={removeBook} />
      ))}
    </div>
  );
}
export default BookList;