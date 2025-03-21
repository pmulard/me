import React from 'react';
import Header from '../components/Header';
import Project from '../components/Project';

const PROJECTS = [
  {
    name: 'MotoMemo',
    description: 'Web app for motorcycle enthusiasts to customize and track their maintenance',
    url: 'https://moto-memo.com'
  },
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
  },
  {
    name: 'TCP Echo Server',
    description: 'Simple TCP server and client that reflects messages back to the sender',
    url: 'https://github.com/pmulard/tcp-echo-server'
  },
  {
    name: 'Machine Learning Study Guide',
    description: 'Comprehensive notes and implementations of machine learning algorithms from Andrew Ng\'s specialization',
    url: 'https://github.com/pmulard/machine-learning-specialization-andrew-ng'
  },
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