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
            , a food manufacturing company, helping bring data from our industrial machines to the cloud. I also contribute to an open source project called&nbsp;
            <span>
              <a
                className="work-link"
                href="https://www.c0d3.com/"
                target="blank"
              >
                c0d3.com
              </a>
            </span>
            , helping students learn full stack software engineering.
          </p>
          <p>
            Recently, I've been working with docker and linux, and enjoy using javascript in my free time. I also love to cook, backpack wilderness if I'm feeling adventerous, catch an occasional surf, and spend the rest of my time reading and learning.
          </p>
          <p>
            I hope to leave lasting, positive change by combining my career, skills and passions, while building some cool tech along the way. A few movements important to me - sustainability, criminal justice reform, and building a society that aligns with our values.
          </p>
        </div>
        <hr />
        <div className="social-link-container" key="1">
          <a className="social-link" href="https://github.com/pmulard" target="blank">github</a>
          <a className="social-link" href="https://twitter.com/pemmm12" target="blank">twitter</a>
        </div>
      </div>
    );
  }
}

export default AboutInfo;