import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about__container">
      <div className="common_section">
        <h1>About Us</h1>
      </div>
      <div className="about__content">
        <div className="about_top">
          <div className="top_left">
            <h1>How LazyLevel started</h1>
            <p>
              LazyLevel began with a vision to create a vibrant community where
              growth and collaboration thrive. Built on a foundation of purpose
              and innovation, it seamlessly combines leadership with
              opportunity. From its early days, LazyLevel has been driven by a
              commitment to empower individuals and foster meaningful
              connections.
            </p>

            <button>READ BLOG</button>
          </div>
          <div className="top_right">
            <h1>More About Us</h1>
            <p>We are committed to fostering growth, innovation, and meaningful connections. Here's what sets us apart:</p>
            <ul>
              <li>✓ Seamlessly blending purpose with progress to drive impactful results.</li>
              <li>✓ Building a foundation of trust and collaboration to empower communities.</li>
              <li>✓ Offering innovative solutions that inspire creativity and growth.</li>
              <li>✓ Striving for excellence through dedication and continuous improvement.</li>
            </ul>
          </div>
        </div>
        <div className="about_bottom">
          <div className="bottom_left">
            <h1>You can buy best products from LazyLevel</h1>
          </div>
          <div className="bottom_right">
            <p className="p1">Life is a journey of growth and transformation, and we believe in embracing every step of the way. With a focus on innovation and collaboration, we aim to inspire and empower those around us.</p>

            <p className="p2">Every step forward brings new opportunities for growth and success. With dedication and a commitment to excellence, we continue to build a world where our values are constantly evolving.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
