import React from 'react';
import { number } from 'prop-types';
import range from 'lodash.range';
import math from 'mathjs';
import styled from 'styled-components/macro';

import Number from '../Number';

const StyledRow = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
`;

/**
 * This component will generate a row/list of nodes. The amount of nodes on a
 * row is based on the row index. The value of each node is calculated with a
 * third party library 'mathjs' which will calculate the number of ways a node
 * can be reached from the top of the triangle. Providing the amount of nodes
 * needed to create a row the function `math.combinations()` will calculate the
 * value for the nodes.
 *
 * @param {Object} props            React props
 * @param {Number} props.rowIndex   Index for the current row
 */
function Row({ rowIndex }) {
  const rowNumber = rowIndex + 1;

  /**
   * Generate a list of numbers and calculate the value of each.
   */
  const numbers = range(rowNumber).map((index) =>
    math.combinations(rowIndex, index)
  );

  /**
   * Define animation settings.
   */
  const animationDelay = 50; // milliseconds
  const rowDelay = ((rowNumber * (rowNumber + 1)) / 2) * animationDelay;

  return (
    <StyledRow>
      {numbers.map((value, index) => (
        <Number
          key={`row-${rowIndex}-number-${index}`}
          index={index}
          value={value}
          rowDelay={rowDelay}
          animationDelay={animationDelay}
        />
      ))}
    </StyledRow>
  );
}

Row.propTypes = {
  rowIndex: number.isRequired,
};

export default Row;
