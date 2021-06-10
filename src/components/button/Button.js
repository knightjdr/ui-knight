import React from 'react';

const Button = ({ children, type }) => (
  <button
    className="uiknight-button"
    type={type}
  >
    {children}
  </button>
);

Button.defaultProps = {
  type: 'button',
};

export default Button;
