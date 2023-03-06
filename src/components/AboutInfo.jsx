import React from 'react';
import '../styles/aboutInfo.css';

class AboutInfo extends React.Component {
  render() {
    return (
      <div>
        <div className="text-container">
          <p>
            Hi, I'm a software engineer with full stack experience, primarily with Python backend microservices, JavaScript and React front-ends, and building CI/CD pipelines. I'm currently looking for new opportunities, so feel free to reach out if you think we could be a great fit!
          </p>
          <p>
            Recently, I've been getting my hands dirty with Rust to get a better understanding of systems programming, which has been a great challenge. I also love to cook, backpack wilderness if I'm feeling adventurous, catch an occasional surf, and spend the rest of my time reading and learning.
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