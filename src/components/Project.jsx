import React from 'react';
import '../styles/project.css';

class Project extends React.Component {
  render() {
    return (
      <div className="project-container">
        <a
          className="project-name"
          href={this.props.url}
          target="blank"
        >
          {this.props.name}
        </a>
        <ul className="project-description">
          <li>{this.props.description}</li>
        </ul>
      </div>
    );
  }
}

export default Project;