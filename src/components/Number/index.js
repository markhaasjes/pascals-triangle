import React from 'react';
import styled from 'styled-components/macro';
import { useSpring, animated } from 'react-spring';

const AnimatedNumber = styled(animated.span)`
  display: inline-block;
  min-width: 4.6em;
  padding: 0.5em 1em;
  text-align: center;
  border: 1px solid black;
  margin: 0.1em;
`;

export default function Number({ number, index, animationDelay, rowDelay }) {
  const cellDelay = index * animationDelay + rowDelay;

  const animationProps = useSpring({
    from: { color: '#282c34' },
    to: { color: 'white' },
    delay: cellDelay,
  });

  return <AnimatedNumber style={animationProps}>{number}</AnimatedNumber>;
}
