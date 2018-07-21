/* eslint react/button-has-type: off */
import PropTypes from 'prop-types';
import React from 'react';

import OnKeyPress from '../../hoc/on-key-press';

import './basic-css-only.css';

const BasicCssButton = ({
  children,
  className,
  shadow,
  type,
  ...props
}) => {
  const classes = ['knight-basic-css-button'];
  if (shadow) { classes.push('knight-basic-css-button_boxshadow'); }
  if (className) { classes.push(className); }
  const { onEnter, ...otherProps } = props;
  return (
    <button
      className={classes.join(' ')}
      type={type}
      {...otherProps}
    >
      { children }
    </button>
  );
};


BasicCssButton.defaultProps = {
  children: 'button',
  className: null,
  onEnter: null,
  shadow: false,
  type: 'button',
};

BasicCssButton.propTypes = {
  /** Button text, icon, etc. */
  children: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.string,
  ]),
  /** Custom class. */
  className: PropTypes.string,
  /** Function to call on pressing the enter button. */
  onEnter: PropTypes.func,
  /** Add default box shadow. */
  shadow: PropTypes.bool,
  /** Button type. */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

export default OnKeyPress(BasicCssButton);
