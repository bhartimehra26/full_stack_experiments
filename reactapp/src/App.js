import ProductCard from "./components/ProductCard";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 55999,
    category: "Electronics",
    image: "images/laptop.jpg"
  },
  {
    id: 2,
    name: "Phone",
    price: 18999,
    category: "Electronics",
    image: "images/phone.jpg"
  },
  {
    id: 3,
    name: "Headphones",
    price: 7999,
    category: "Accessories",
    image: "images/headph.jpg"
  },
  {
    id: 4,
    name: "Personal Planner",
    price: 1999,
    category: "Stationery",
    image: "images/planner.jpg"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Products
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;