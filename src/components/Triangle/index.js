import React, { Component } from 'react';
import styled from 'styled-components/macro';
import range from 'lodash.range';

import Row from '../Row';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/**
 * Base container component for "Pascal's Triangle". Here we define how many
 * rows the triangle needs to have.
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
      <Container>
        {range(this.state.numRows).map((index) => (
          <Row key={`row-${index}`} rowIndex={index} />
        ))}
      </Container>
    );
  }
}

export default Triangle;
