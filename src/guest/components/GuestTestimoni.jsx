import testimoni from "../data/testi.json"; 

export default function Testimoni() {
  return (
    <section id="testimoni" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="heading text-center font-poppins-extrabold text-[36px] mb-10">
            Testimoni
        </h2>
        <p className="text-gray-700 text-lg mb-12 font-poppins">
            Apa kata mereka tentang Sedap?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimoni.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition text-left font-poppins"
            >
              <div className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <h3 className="text-lg font-semibold text-black font-poppins">
                  {item.name}
                </h3>
              </div>
              <p className="text-gray-600 font-poppins italic">"{item.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
