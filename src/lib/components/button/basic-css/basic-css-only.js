/* eslint react/button-has-type: off */
import PropTypes from 'prop-types';
import React from 'react';

import OnKeyPress from '../../hoc/on-key-press';

import './basic-css-only.css';

const BasicCssButton = ({
  children,
  className,
  effect,
  shadow,
  type,
  ...props
}) => {
  const classes = ['knight-basic-css-button'];
  // Optional styles.
  if (shadow) { classes.push('knight-basic-css-button_boxshadow'); }
  // Add focus effect
  const effects = {
    borderfade: 'knight-basic-css-button_border-fade',
    ripple: 'knight-basic-css-button_ripple',
  };
  classes.push(effects[effect]);
  // Add user supplied class(es).
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
  effect: 'ripple',
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
  /** Click effect */
  effect: PropTypes.oneOf(['borderfade', 'ripple']),
  /** Function to call on pressing the enter button. */
  onEnter: PropTypes.func,
  /** Add default box shadow. */
  shadow: PropTypes.bool,
  /** Button type. */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

export default OnKeyPress(BasicCssButton);
