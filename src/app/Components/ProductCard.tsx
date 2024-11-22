import Image from "next/image"; 

function ProductCard() {
  const products = [
    { id: 1, name: "Perfume", price: "Rs. 500", image: "/download (1).jpeg" },
    { id: 2, name: "Perfume", price: "Rs. 500", image: "/download (2).jpeg" },
    { id: 3, name: "Perfume", price: "Rs. 500", image: "/download (3).jpeg" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    
      {products.map((product) => (
        <div
          key={product.id}
          className="border border-yellow-300 p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        >
          {/* Image Section */}
          <div className="flex justify-center">
            <Image
              src={product.image} 
              alt={product.name} 
              width={200} 
              height={200} 
              layout="intrinsic" 
              className="rounded-lg"
            />
          </div>

          {/* Product Name */}
          <p className="text-center py-2 text-sm font-medium text-gray-800 hover:text-red-500">
            {product.name}
          </p>

          {/* Product Price */}
          <p className="text-center py-2 text-gray-700">{product.price}</p>

          {/* Buy Now Button */}
          <div className="flex justify-center">
            <button className="bg-blue-600 text-white py-2 px-6 sm:px-4 md:px-8 rounded-xl hover:bg-blue-700 transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
