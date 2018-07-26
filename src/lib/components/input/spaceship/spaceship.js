/* eslint react/button-has-type: off */
import PropTypes from 'prop-types';
import React from 'react';

import SpaceshipEvents from './spaceship-events_noguide';

import './spaceship.css';

const Spaceship = ({
  children,
  className,
  hoverText,
  shadow,
  type,
  ...props
}) => {
  const classes = ['knight-spaceship__button'];
  // Optional styles.
  if (shadow) { classes.push('knight-spaceship__button_boxshadow'); }
  // Add user supplied class(es).
  if (className) { classes.push(className); }
  const { onEnter, spaceship, ...otherProps } = props;
  return (
    <div className="knight-spaceship">
      <svg
        className="knight-spaceship__svg"
        height="85px"
        width="40px"
      >
        <g
          opacity={spaceship.opacity}
          transform={`translate(0 ${spaceship.translate})`}
        >
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
      <button
        className={classes.join(' ')}
        hover-text={hoverText}
        type={type}
        {...otherProps}
      >
        { children }
      </button>
    </div>
  );
};


Spaceship.defaultProps = {
  children: 'ready',
  className: null,
  hoverText: 'aim...',
  onEnter: null,
  shadow: false,
  spaceship: {
    animation: null,
    opacity: 0,
    translate: 40,
  },
  type: 'button',
};

Spaceship.propTypes = {
  /** Button text, icon, etc. */
  children: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.string,
  ]),
  /** Custom class. */
  className: PropTypes.string,
  /** Text to display on hover. */
  hoverText: PropTypes.string,
  /** Function to call on pressing the enter button. */
  onEnter: PropTypes.func,
  /** Add default box shadow. */
  shadow: PropTypes.bool,
  /** Comes. From events HOC.
  * @ignore */
  spaceship: PropTypes.shape({
    animation: PropTypes.string,
    opacity: PropTypes.number,
    translate: PropTypes.number,
  }),
  /** Button type. */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

export default SpaceshipEvents(Spaceship);
