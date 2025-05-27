import products from "../data/top.json"; 

export default function TopProduct() {
  return (
    <section id="top-products" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="heading text-center font-poppins-extrabold text-[36px] mb-10">
          Top Product
        </h2>
        <p className="text-gray-700 text-lg mb-12 font-poppins">
          Makanan terlezat kami yang paling disukai pelanggan.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 font-poppins"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4 font-poppins"
              />
              <h3 className="text-lg font-poppins text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-green-800 font-poppins font-medium">
                Rp {product.price.toLocaleString("id-ID")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
