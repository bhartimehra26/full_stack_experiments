import { useState } from "react";
function AddBookForm({ addBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return;

    addBook({ title, author });
    setTitle("");
    setAuthor("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 mb-6"
    >
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300"
      />
      <input
        type="text"
        placeholder="Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="flex-1 p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300"
      />
      <button
        type="submit"
        className="bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-indigo-600 transition"
      >
        Add Book
      </button>
    </form>
  );
}
export default AddBookForm;