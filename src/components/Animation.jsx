import React from 'react';
import Tree from '../files/tree.svg';
import Rhombus from '../files/rhombus.svg';
import '../styles/animation.css';

const TRUNK_DOTS = [
  295, 315, 335, 355, 375
];

const RHOMBUSES = [
  [120, 100, 100],
  [85, 115, 70],
  [185, 115, 70],
  [60, 128, 44],
  [235, 128, 44],
  [40, 136, 28],
  [26, 141, 18],
  [140, 120, 60]
];

const PARTICLES = [
  ['star', 'x-large', 4, 112],
  ['star', 'x-large', 19, 71],
  ['star', 'x-large', 50, 72],
  ['star', 'x-large', 60, 30],
  ['star', 'x-large', 85, 88],
  ['star', 'x-large', 120, 70],
  ['star', 'x-large', 134, 12],
  ['star', 'x-large', 176, 80],
  ['star', 'x-large', 188, 8],
  ['star', 'x-large', 202, 52],
  ['star', 'x-large', 216, 100],
  ['star', 'x-large', 237, 24],
  ['star', 'x-large', 268, 63],
  ['diamond', 'large', 35, 80],
  ['diamond', 'large', 25, 110],
  ['diamond', 'large', 60, 90],
  ['diamond', 'large', 70, 55],
  ['diamond', 'large', 100, 70],
  ['diamond', 'large', 118, 20],
  ['diamond', 'large', 123, 52],
  ['diamond', 'large', 130, 87],
  ['diamond', 'large', 157, 15],
  ['diamond', 'large', 165, 70],
  ['diamond', 'large', 180, 41],
  ['diamond', 'large', 207, 92],
  ['diamond', 'large', 208, 25],
  ['diamond', 'large', 218, 60],
  ['diamond', 'large', 250, 52],
  ['diamond', 'large', 258, 90],
  ['square', 'small', 0, 130],
  ['square', 'small', 23, 98],
  ['square', 'small', 44, 51],
  ['square', 'small', 76, 110],
  ['square', 'small', 81, 27],
  ['square', 'small', 108, 97],
  ['square', 'small', 108, 9],
  ['square', 'small', 140, 75],
  ['square', 'small', 158, 107],
  ['square', 'small', 168, 0],
  ['square', 'small', 204, 80],
  ['square', 'small', 223, 40],
  ['square', 'small', 259, 32],
  ['square', 'small', 273, 86],
  ['dot', 'x-small', -7, 120],
  ['dot', 'x-small', 4, 94],
  ['dot', 'x-small', 15, 110],
  ['dot', 'x-small', 35, 41],
  ['dot', 'x-small', 36, 98],
  ['dot', 'x-small', 44, 65],
  ['dot', 'x-small', 60, 110],
  ['dot', 'x-small', 67, 70],
  ['dot', 'x-small', 70, 17],
  ['dot', 'x-small', 85, 46],
  ['dot', 'x-small', 96, 22],
  ['dot', 'x-small', 98, 109],
  ['dot', 'x-small', 99, 0],
  ['dot', 'x-small', 120, 40],
  ['dot', 'x-small', 125, 7],
  ['dot', 'x-small', 134, 103],
  ['dot', 'x-small', 139, -7],
  ['dot', 'x-small', 154, 50],
  ['dot', 'x-small', 172, 28],
  ['dot', 'x-small', 187, 102],
  ['dot', 'x-small', 194, 65],
  ['dot', 'x-small', 200, -4],
  ['dot', 'x-small', 223, 12],
  ['dot', 'x-small', 242, 107],
  ['dot', 'x-small', 245, 43],
  ['dot', 'x-small', 261, 72],
  ['dot', 'x-small', 286, 80],
  ['star', 'x-small', -14, 133],
  ['star', 'x-small', -4, 103],
  ['star', 'x-small', 7, 75],
  ['star', 'x-small', 16, 90],
  ['star', 'x-small', 24, 55],
  ['star', 'x-small', 35, 70],
  ['star', 'x-small', 48, 25],
  ['star', 'x-small', 53, 46],
  ['star', 'x-small', 51, 90],
  ['star', 'x-small', 57, 64],
  ['star', 'x-small', 70, 45],
  ['star', 'x-small', 75, 86],
  ['star', 'x-small', 84, 7],
  ['star', 'x-small', 93, 65],
  ['star', 'x-small', 105, 52],
  ['star', 'x-small', 117, -5],
  ['star', 'x-small', 123, 85],
  ['star', 'x-small', 132, 36],
  ['star', 'x-small', 152, 88],
  ['star', 'x-small', 153, 36],
  ['star', 'x-small', 156, -9],
  ['star', 'x-small', 164, 60],
  ['star', 'x-small', 172, 95],
  ['star', 'x-small', 180, 65],
  ['star', 'x-small', 182, 32],
  ['star', 'x-small', 184, -8],
  ['star', 'x-small', 194, 50],
  ['star', 'x-small', 200, 27],
  ['star', 'x-small', 213, 0],
  ['star', 'x-small', 215, 53],
  ['star', 'x-small', 220, 84],
  ['star', 'x-small', 225, 26],
  ['star', 'x-small', 232, 60],
  ['star', 'x-small', 240, 10],
  ['star', 'x-small', 273, 50],
  ['star', 'x-small', 283, 102]
];

class Animation extends React.Component {
  render() {
    return (
      <div className="animation-container">
        <img
          className="tree"
          src={Tree}
          alt="tree"
        />

        {/* Dots on bottom trunk of tree */}
        {TRUNK_DOTS.map((location, index) => {
          return (
            <div
              className={`dot trunk-dot t${index}`}
              style={{ top: location, left: 149, width: 2, height: 2 }}
            ></div>
          );
        })}

        {/* Rhombuses on center of tree */}
        {RHOMBUSES.map((e) => {
          return (
            <img
              className="rhombus"
              src={Rhombus}
              alt="rhombus"
              style={{ top: e[0], left: e[1], width: e[2], height: e[2] }}
            />
          );
        })}

        {/* Particles on left side of tree */}
        {PARTICLES.map((e, index) => {
          return (
            <div
              className={`object ${e[0]} ${e[1]} r${index % 6}`}
              style={{ top: e[2], left: e[3] }}
            ></div>
          );
        })}

        {/* Particles on right side of tree */}
        {PARTICLES.map((e, index) => {
          return (
            <div
              className={`object ${e[0]} ${e[1]} r${(index+2) % 6}`}
              style={{ top: e[2], right: e[3] }}
            ></div>
          );
        })}

        {/* Very top of tree */}
        <div
          className="object arrow"
          style={{ top: -21, left: 143, width: 14, height: 14 }}
        ></div>
        <div
          className="object plus"
          style={{ top: -12, left: 143 }}
        ></div>
        <div
          className="object dot"
          style={{ top: 6, left: 148, width: 4, height: 4 }}
        ></div>

        {/* Dot inside center rhombus */}
        <div
          className="center-dot"
          style={{ top: 168, left: 148 }}
        ></div>
      </div>
    )
  }
}

export default Animation;