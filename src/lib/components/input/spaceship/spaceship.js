import PropTypes from 'prop-types';
import React from 'react';

import OnFocus from './spaceship-focus_noguide';

import './spaceship.css';

const Spaceship = ({
  className,
  onBlur,
  onFocus,
  placeholder,
  ...props
}) => {
  const classes = ['knight-spaceship__input'];
  // Add user supplied class(es).
  if (className) { classes.push(className); }
  const { focusText, placeholderText, ...otherProps } = props;
  return (
    <div className="knight-spaceship">
      <input
        className={classes.join(' ')}
        onBlur={onBlur}
        onFocus={onFocus}
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


Spaceship.defaultProps = {
  className: null,
  focusText: '',
  placeholderText: '',
};

Spaceship.propTypes = {
  /** Custom class. */
  className: PropTypes.string,
  /** Text to use for placeholder on focus. */
  focusText: PropTypes.string,
  /** @ignore */
  onBlur: PropTypes.func.isRequired,
  /** @ignore */
  onFocus: PropTypes.func.isRequired,
  /** @ignore */
  placeholder: PropTypes.string.isRequired,
  /** Text to use for placeholder. */
  placeholderText: PropTypes.string,
};

export default OnFocus(Spaceship);
