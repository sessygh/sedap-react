import products from "../data/produk.json"; 

export default function TopProduct() {
  return (
    <section id="top-products" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-amarant-bold text-gray-900 mb-6">
          Produk Unggulan
        </h2>
        <p className="text-gray-700 text-lg mb-12">
          Pilihan terbaik kami yang paling disukai pelanggan.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-lobster-regular text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-yellow-600 font-medium">
                Rp {product.price.toLocaleString("id-ID")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}