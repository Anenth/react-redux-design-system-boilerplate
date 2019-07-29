import React from 'react';

const commonProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeWidth: '2',
};

/* eslint-disable camelcase */
export const arrow_left = (
  <svg {...commonProps}>
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

