import PropTypes from 'prop-types';
import React from 'react';

import OnKeyPress from '../../hoc/on-key-press';

import './input.css';

const InputView = ({
  className,
  onEnter,
  shadow,
  ...otherProps
}) => {
  const classes = ['knight-input'];
  // Add user supplied class(es).
  if (className) { classes.push(className); }
  if (shadow) { classes.push('knight-input_boxshadow'); }
  return (
    <input
      className={classes.join(' ')}
      onKeyPress={onEnter}
      {...otherProps}
    />
  );
};


InputView.defaultProps = {
  className: null,
  onEnter: () => {},
  shadow: false,
};

InputView.propTypes = {
  /** Class(es). */
  className: PropTypes.string,
  /** Function to call on pressing the enter button. */
  onEnter: PropTypes.func,
  /** Add default box shadow. */
  shadow: PropTypes.bool,
};

export default OnKeyPress(InputView);
