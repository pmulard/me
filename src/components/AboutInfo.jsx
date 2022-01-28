import React from 'react';
import '../styles/aboutInfo.css';

class AboutInfo extends React.Component {
  render() {
    return (
      <div>
        <div className="text-container">
          <p>
            Hi, I'm a software engineer working for&nbsp;
            <span>
              <a
                className="work-link"
                href="https://www.jbtc.com/en/north-america/foodtech"
                target="blank"
              >
                JBT Corp.
              </a>
            </span>
            , a food manufacturing company, helping bring data from our industrial machines to the cloud. Our projects have provided me a ton of knowledge for back-end microservices and cloud infrastructure, and it's been a really fun learning process so far.
          </p>
          <p>
            Recently, I've been getting my hands dirty with Rust to get a better understanding of systems programming, which has been a great challenge. I also love to cook, backpack wilderness if I'm feeling adventerous, catch an occasional surf, and spend the rest of my time reading and learning.
          </p>
          <p>
            I hope to leave lasting, positive change by combining my career, skills and passions, while building some cool tech along the way. A few movements important to me - sustainability, criminal justice reform, and building a society that aligns with our values.
          </p>
        </div>
        <hr />
        <div className="social-link-container" key="1">
          <a className="social-link" href="https://github.com/pmulard" target="blank">github</a>
          <a className="social-link" href="https://twitter.com/petermulard" target="blank">twitter</a>
        </div>
      </div>
    );
  }
}

export default AboutInfo;