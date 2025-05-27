import React from 'react';
import illustration1 from '/img/d1.jpg';
import illustration2 from '/img/d2.png';
import illustration3 from '/img/d3.png';

const AboutUs = () => {
  return (
    <section className="works-section gap no-top">
      <div className="container mx-auto px-4">
        <div className="heading text-center font-poppins-extrabold text-[36px] mb-10">
          <h2>About Us</h2>
        </div>

        {/* Flexbox untuk 3 kolom horizontal */}
        <div className="flex flex-col md:flex-row justify-between items-start text-center gap-8">
          {/* Item 1 */}
          <div className="flex-1 flex flex-col items-center font-poppins px-4">
            <img src={illustration1} alt="Select Restaurant" className="w-32 h-32 object-contain mb-4" />
            <h4 className="text-xl font-semibold mb-2">
              <span className="text-green-500 font-bold me-2">01</span> Free Delivery
            </h4>
            <p className="text-sm text-gray-600 font-medium">
              Non enim praesent elementum facilisis leo vel fringilla. Lectus
              proin nibh nisl condimentum id. Quis varius quam quisque id diam
              vel.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex-1 flex flex-col items-center font-poppins px-4">
            <img src={illustration2} alt="Select Menu" className="w-32 h-32 object-contain mb-4" />
            <h4 className="text-xl font-semibold mb-2">
              <span className="text-green-500 font-bold me-2">02</span> Save Your Time
            </h4>
            <p className="text-sm text-gray-600 font-medium">
              Eu mi bibendum neque egestas congue quisque. Nulla facilisi morbi
              tempus iaculis urna id volutpat lacus. Odio ut sem nulla pharetra
              diam sit amet.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex-1 flex flex-col items-center font-poppins px-4">
            <img src={illustration3} alt="Wait for Delivery" className="w-32 h-32 object-contain mb-4" />
            <h4 className="text-xl font-semibold mb-2">
              <span className="text-green-500 font-bold me-2">03</span> Variety Food
            </h4>
            <p className="text-sm text-gray-600 font-medium">
              Nunc lobortis mattis aliquam faucibus. Nibh ipsum consequat nisl
              vel pretium lectus quam id leo. A scelerisque purus semper eget.
              Tincidunt arcu non.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
