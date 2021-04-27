import React from 'react';
import Header from '../components/Header';
import AboutInfo from '../components/AboutInfo';

class About extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar-container">
          <Header />
        </div>
        <div class="content-container">
          <AboutInfo />  
        </div>
      </div>
    )
  }
}

export default About;