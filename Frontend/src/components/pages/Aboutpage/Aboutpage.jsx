import React from "react";
import "./Aboutpage.css";
const Aboutpage = () => {
  return (
    <>
      <div className="curved-banner scroll-container">ABOUT US</div>
      <div className="about-container">
        <div className="about-1">
          <h1>WHO ARE WE</h1>
          <div className="about-1-body">
            <div className="left">
              <img src="product-07.jpg" alt="about-us-photo" />
            </div>
            <div className="right">
              <p className="italic-text">
                At ANZ Products Ltd, we take pride in being a leading manufacturer
                and exporter of high-quality metal handicrafts, home decor, and
                furniture. With deep roots in India and a registered presence in
                the UK, we bring together the best of craftsmanship and
                contemporary design to deliver products that meet global
                standards. Our offerings include a wide range of wood and metal
                furniture, lighting fixtures, decorative accessories, barware,
                kitchenware, and gift items, all crafted with care and precision.
              </p>
            </div>
          </div>
        </div>
        <div className="about-2">
          <h1>WHAT WE DO</h1>
          <p className="italic-text">
            Since our inception, our goal has been to blend tradition with
            innovation. We work closely with skilled artisans, ensuring that
            each product reflects the unique artistry of India while adhering to
            international quality and design standards. Sustainability is at the
            heart of everything we do. From eco-friendly production practices to
            ethical sourcing, we are committed to minimizing environmental
            impact while delivering exceptional value to our clients. At ANZ
            Products Ltd, we believe in building long-lasting relationships
            based on trust and reliability. Our team is dedicated to providing
            seamless support, personalized solutions, and products tailored to
            meet the unique needs of our partners. Join us in celebrating
            craftsmanship, sustainability, and innovation. Explore our
            collections and discover how ANZ Products Ltd can elevate your
            spaces with timeless and elegant designs.
          </p>
        </div>
        <div className="about-3">
          <h1>OUR MISSION</h1>
          <div className="about-1-body">
            <img src="product-02.jpg" alt="about-us-photo" />
            <p className="italic-text">Our mission is to harmonize beauty and sustainability in metal decorative items and handicrafts. We are committed to responsible sourcing and eco-friendly production methods, ensuring that our creations not only enhance spaces but also respect the environment. By blending traditional craftsmanship with sustainable practices, we produce unique pieces that celebrate artistry while minimizing our ecological footprint. Our goal is to inspire a greater appreciation for handcrafted art and promote sustainable living. </p>
            <img src="product-02.jpg" alt="about-us-photo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutpage;
