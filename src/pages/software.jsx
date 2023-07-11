import React from 'react';
import Header from '../components/Header';
import Project from '../components/Project';

const PROJECTS = [
  {
    name: 'Sorting Algorithm Visualizer',
    description: 'Interactive app showing sorting algorithms in real time',
    url: 'https://github.com/pmulard/Sorting-Visualizer'
  },
  {
    name: 'Moon Phase Calculator',
    description: 'Web-based tool for calculating moon properties',
    url: 'https://github.com/pmulard/Moon-Phase-Calculator'
  },
  {
    name: 'Data Structures and Algorithms Reference',
    description: '30+ data structures and algorithms written in JavaScript, Python and Rust',
    url: 'https://github.com/pmulard/data-structures-and-algorithms'
  }
];

class Software extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar-container">
          <Header />
        </div>
        <div class="content-container">
          {PROJECTS.map((project) => {
            return (
              <Project
                name={project.name}
                description={project.description}
                url={project.url}
              />
            );
          })}
        </div>
      </div>
    )
  }
}

export default Software;