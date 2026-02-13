function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search by book title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300"
      />
    </div>
  );
}
export default SearchBar;