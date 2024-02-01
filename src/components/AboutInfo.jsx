import React from 'react';
import '../styles/aboutInfo.css';

class AboutInfo extends React.Component {
  render() {
    return (
      <div>
        <div className="text-container">
          <p>
            Hi, I'm a software engineer with full stack experience, primarily with Rust, Python, JavaScript, and React.
            I'm current building the backend for a next generation <a href="https://eth.nexandria.com" target="blank">blockchain explorer</a> at <a href="https://nexandria.com" target="blank">Nexandria</a> and am extremely passionate about what we do.
            Feel free to contact me with any questions.
          </p>
          <p>
            Recently, I've been programming almost exclusively with Rust and enjoy it more each day. I also love to cook, backpack wilderness if I'm feeling adventurous, catch an occasional surf, and spend the rest of my time reading and learning.
          </p>
          <p>
            I hope to leave lasting, positive change by combining my career, skills and passions, while building some cool tech along the way. A few movements important to me - sustainability, criminal justice reform, and building a society that aligns with our values.
          </p>
        </div>
        <hr />
        <div className="social-link-container" key="1">
          <a className="social-link" href="https://github.com/pmulard" target="blank">github</a>
          <a className="social-link" href="https://linkedin.com/in/petermulard" target="blank">linkedin</a>
        </div>
      </div>
    );
  }
}

export default AboutInfo;