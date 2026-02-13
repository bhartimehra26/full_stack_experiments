function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm">
      <div className="w-full h-48 bg-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500">
          {product.category}
        </p>

        <p className="text-xl font-bold text-green-600 mt-2">
          ₹{product.price}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
