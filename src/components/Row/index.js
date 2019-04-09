import React from 'react';
import range from 'lodash.range';
import math from 'mathjs';
import styled from 'styled-components/macro';
import { useSpring, animated } from 'react-spring';

import Number from '../Number';

const AnimatedRow = styled(animated.div)``;
const AnimatedNumber = styled(Number)``;

/**
 * This component will generate a row with numbers. The amount of numbers on one
 * row is based on the row number. The number itself is calculated with a third
 * party library 'mathjs' and will calculate the number of ways based on the
 * total numbers of rows `rowNumber` and index `numberIndex` of the number on the
 * current row.
 * @param {Number} rowNumber Number of row used to determine the amount of rows till now
 */
export default function Row({ rowNumber }) {
  const numbers = range(rowNumber).map((numberIndex) =>
    math.combinations(rowNumber - 1, numberIndex)
  );

  const animationDelay = 100; // milliseconds
  const prevRowNumber = rowNumber - 1;
  const rowDelay = prevRowNumber * (animationDelay * 2) * 2;

  const animationProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: rowDelay,
  });

  return (
    <AnimatedRow style={animationProps}>
      {numbers.map((number, index) => (
        <AnimatedNumber
          key={`row-${rowNumber}-number-${index + 1}`}
          index={index + 1}
          rowDelay={rowDelay}
          animationDelay={animationDelay}
          number={number}
        />
      ))}
    </AnimatedRow>
  );
}
