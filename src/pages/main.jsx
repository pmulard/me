import React from 'react';
import Header from '../components/Header';
import Animation from '../components/Animation';

class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar-container">
          <Header />
        </div>
        <div className="content-container">
          <Animation />
        </div>
      </div>
    )
  }
}

export default Main;