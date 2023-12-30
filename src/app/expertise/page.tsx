import type { NextPage } from "next";

const Expertise: NextPage = () => {
  return (
    <>
        <section className="service section" id="services">
  <div className="container">
    <div className="row">
      <div className="section-title padd-15">
        <h2>Expertise</h2>
      </div>
    </div>
    <div className="row">
      {/* Service Item 1: Logo Design */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-paint-brush" /></div>
          <h4>Professional Logo Design</h4>
          <p>Designing a professional logo combines strategy, creativity, and brand understanding.
          </p>
        </div>
      </div>
      {/* Service Item 1 End */}
      {/* Service Item 2: Web Design */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-laptop" /></div>
          <h4>Custom Web Design</h4>
          <p>Crafting a custom web design requires strategic thinking, creativity, and a deep understanding of a brand's online presence.
          </p>
        </div>
      </div>
      {/* Service Item 2 End */}
      {/* Service Item 3: Design Thinking */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-magic" /></div>
          <h4>Design Thinking</h4>
          <p>Applying design thinking methodologies to solve complex problems and create innovative solutions.
          </p>
        </div>
      </div>
      {/* Service Item 3 End */}
      {/* Service Item 4: Web Development */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-pencil" /></div>
          <h4>Wireframing</h4>
          <p>Creating low-fidelity sketches or wireframes to outline the basic structure and layout of a digital product.
            </p>
        </div>
      </div>
      {/* Service Item 4 End */}
      {/* Service Item 5: Video Editing */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-commenting" /></div>
          <h4>Empathy for Users</h4>
          <p>Developing a deep understanding of users' emotions, motivations, and pain points to create empathetic designs.
          </p>
        </div>
      </div>
      {/* Service Item 5 End */}
      {/* Service Item 6: SEO Optimization */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-code" /></div>
          <h4>Prototyping</h4>
          <p>Developing interactive prototypes to simulate user interactions and test design concepts before implementation.
          </p>
        </div>
      </div>
      {/* Service Item 6 End */}
    </div>
  </div>
</section>


    </>
  );
};

export default Expertise;
