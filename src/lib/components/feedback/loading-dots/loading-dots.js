import PropTypes from 'prop-types';
import React from 'react';

import './loading-dots.css';

const LoadingDots = ({
  color,
}) => (
  <div className="knight-loading-dots">
    <svg
      height="20px"
      width="70"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" fill={color} r="10" />
      <circle cx="35" cy="10" fill={color} r="10" />
      <circle cx="60" cy="10" fill={color} r="10" />
    </svg>
  </div>
);

LoadingDots.defaultProps = {
  color: '#337BAE',
};

LoadingDots.propTypes = {
  color: PropTypes.string,
};

export default LoadingDots;
