function BookCard({ book, removeBook }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col justify-between transition hover:shadow-xl">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{book.title}</h3>
        <p className="text-gray-600">{book.author}</p>
      </div>
      {removeBook && (
        <button
          onClick={() => removeBook(book.id)}
          className="mt-4 bg-red-100 text-red-600 font-semibold px-4 py-2 rounded-xl hover:bg-red-200 transition"
        >
          Remove
        </button>
      )}
    </div>
  );
}
export default BookCard;