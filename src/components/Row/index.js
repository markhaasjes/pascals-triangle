import React from 'react';
import range from 'lodash.range';
import math from 'mathjs';

import './Row.css';

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

  return (
    <div className="Row">
      {range(rowNumber).map((numberIndex) => (
        <span key={`row-${rowNumber}-number-${numberIndex}`} className="Number">
          {numbers[numberIndex]}
        </span>
      ))}
    </div>
  );
}
