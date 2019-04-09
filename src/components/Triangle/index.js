import React, { Component } from 'react';
import range from 'lodash.range';

import Row from '../Row';

import './Triangle.css';

/**
 * Base container component for "Pascal's Triangle". Here we define how many rows
 * the triangle needs to have.
 */
class Triangle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numRows: 15,
    };
  }

  render() {
    return (
      <div className="Triangle">
        {range(this.state.numRows).map((rowIndex) => (
          <Row key={`row-${rowIndex + 1}`} rowNumber={rowIndex + 1} />
        ))}
      </div>
    );
  }
}

export default Triangle;
