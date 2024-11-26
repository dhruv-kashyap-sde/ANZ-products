import React from 'react';
import './ProductSection.css';

const ProductSection = () => {
  return (
    <div className="image-section">
        <h2 className="section-title">ANZ <span>Collections</span></h2>
        <div className="bento-grid">
          <div className="bento-item large">
            <img src="https://images.unsplash.com/photo-1723743809921-07781a7c6535?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D" alt="Project 1" />
          </div>
          <div className="bento-item">
            <img src="https://images.unsplash.com/photo-1723886738851-db052605153b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDV8fHxlbnwwfHx8fHw%3D" alt="Project 2" />
          </div>
          <div className="bento-item tall">
            <img src="https://plus.unsplash.com/premium_photo-1723669629793-24dba60d5922?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzZ8fHxlbnwwfHx8fHw%3D" alt="Project 3" />
          </div>
          <div className="bento-item">
            <img src="https://images.unsplash.com/photo-1723663758069-f62e8a5db92e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDl8fHxlbnwwfHx8fHw%3D" alt="Project 2" />
          </div>
          <div className="bento-item">
            <img src="https://images.unsplash.com/photo-1721228426981-fd7c37ff6870?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTl8fHxlbnwwfHx8fHw%3D" alt="Project 4" />
          </div>
          <h1>Our <span>"Products"</span></h1>
          <div className="bento-item wide">
            <img src="https://plus.unsplash.com/premium_photo-1723733593117-911425368240?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjB8fHxlbnwwfHx8fHw%3D" alt="Project 5" />
          </div>
          <div className="bento-item">
            <img src="https://plus.unsplash.com/premium_photo-1723826044813-23f32593b6c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDh8fHxlbnwwfHx8fHw%3D" alt="Project 6" />
          </div>
          <div className="bento-item">
            <img src="https://images.unsplash.com/photo-1723748972084-4124765e0a55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDd8fHxlbnwwfHx8fHw%3D" alt="Project 2" />
          </div>
          <div className="bento-item wide">
            <img src="https://plus.unsplash.com/premium_photo-1721769390364-f6029aceeba4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjh8fHxlbnwwfHx8fHw%3D" alt="Project 5" />
          </div>
          <h1>"Frame your vision."</h1>
        </div>
        <div className="more-button">
            <button className="basic-button">More...</button>
        </div>
      </div>
  );
}

export default ProductSection;
