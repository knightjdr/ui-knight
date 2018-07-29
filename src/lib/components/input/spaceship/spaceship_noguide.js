import PropTypes from 'prop-types';
import React from 'react';

import AnimateOnEnter from '../../hoc/animate-on-enter';
import OnInputFocus from '../../hoc/on-input-focus';

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
      <svg
        className="knight-spaceship__svg"
        height="70px"
        width="40px"
      >
        <g>
          <rect
            fill="#000000"
            height="25px"
            transform="translate(0 0)"
            width="40px"
            x="0"
            y="60"
          >
            <animate
              attributeName="y"
              dur="2s"
              repeatCount="indefinite"
              values="60;65;60"
            />
          </rect>
        </g>
      </svg>
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
