import React from 'react';
import { number } from 'prop-types';
import styled from 'styled-components/macro';
import { useSpring, animated } from 'react-spring';

const AnimatedNumber = styled(animated.li)`
  display: inline-block;
  padding: 0.25em 0.75em;
  margin: 0.1em;
  text-align: center;
  border: 1px solid black;

  &:hover {
    background-color: #303550;
  }
`;

/**
 * Displays a value as node inside a row. The value is animated and starts
 * after a pre-calculated delay, which is defined per row. Each node has its
 * own delay on top of the row delay and therefore animates in sequence.
 *
 * @param {Object} props                  React props
 * @param {Object} props.index            Current index of node
 * @param {Object} props.value            Numeric value to display
 * @param {Object} props.rowDelay         Animation delay of row
 * @param {Object} props.animationDelay   Overall animation delay
 */
function Number({ index, value, rowDelay, animationDelay }) {
  const delay = index * animationDelay + rowDelay;

  /**
   * Set start and end properties for react-spring in order to animate nodes.
   */
  const animationProps = useSpring({
    from: { opacity: 0, value: 0 },
    to: { opacity: 1, value },
    delay,
  });

  return (
    <AnimatedNumber style={animationProps}>
      {/* Interpolate animation and round to whole number */}
      {animationProps.value.interpolate((val) => val.toFixed(0))}
    </AnimatedNumber>
  );
}

Number.defaultProps = {
  animationDelay: 100,
};

Number.propTypes = {
  index: number.isRequired,
  value: number.isRequired,
  rowDelay: number.isRequired,
  animationDelay: number,
};

export default Number;
