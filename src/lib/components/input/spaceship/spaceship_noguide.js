import PropTypes from 'prop-types';
import React from 'react';

import AnimateOnEnter from '../../hoc/animate-on-enter';
import OnInputFocus from '../../hoc/on-input-focus';
import Spaceship from './assets/spaceship';

import './spaceship.css';

const SpaceshipView = ({
  animateText,
  className,
  inputText,
  onBlur,
  onFocus,
  onEnter,
  placeholder,
  ...props
}) => {
  const classes = ['knight-spaceship__input'];
  // Add user supplied class(es).
  if (className) { classes.push(className); }
  const { ...otherProps } = props;
  return (
    <div className="knight-spaceship">
      <input
        className={classes.join(' ')}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyPress={onEnter}
        placeholder={placeholder}
        {...otherProps}
      />
      <Spaceship />
    </div>
  );
};


SpaceshipView.defaultProps = {
  className: null,
};

SpaceshipView.propTypes = {
  animateText: PropTypes.bool.isRequired,
  className: PropTypes.string,
  inputText: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default AnimateOnEnter(OnInputFocus(SpaceshipView));
