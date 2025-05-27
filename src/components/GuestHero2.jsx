import React from 'react';
import illustration1 from '/img/d1.jpg';
import illustration2 from '/img/d2.png';
import illustration3 from '/img/d3.png';

const HowItWorks = () => {
  return (
    <section className="works-section gap no-top">
      <div className="container">
        <div className="heading text-center font-poppins-extrabold text-[36px] mb-5">
          <h2>About Us</h2>
          
        </div>

        {/* Layout horizontal, responsive */}
        <div className="row text-center">
  <div className="col-md-4 mb-4 d-flex flex-column align-items-center font-poppins">
    <img src={illustration1} alt="Select Restaurant" className="img-fluid mb-3" />
    <h4>
      <span className="step-number me-2">01</span> Free Delivery
    </h4>
    <p classname="font-semibold">
      Non enim praesent elementum facilisis leo vel fringilla. Lectus
      proin nibh nisl condimentum id. Quis varius quam quisque id diam
      vel.
    </p>
  </div>

  <div className="col-md-4 mb-4 d-flex flex-column align-items-center font-poppins">
    <img src={illustration2} alt="Select Menu" className="img-fluid mb-3" />
    <h4>
      <span className="step-number me-2">02</span> Save Your Time
    </h4>
    <p>
      Eu mi bibendum neque egestas congue quisque. Nulla facilisi morbi
      tempus iaculis urna id volutpat lacus. Odio ut sem nulla pharetra
      diam sit amet.
    </p>
  </div>

  <div className="col-md-4 mb-4 d-flex flex-column align-items-center font-poppins">
    <img src={illustration3} alt="Wait for Delivery" className="img-fluid mb-3" />
    <h4>
      <span className="step-number me-2">03</span> Variety Food
    </h4>
    <p>
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

export default HowItWorks;
