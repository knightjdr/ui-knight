import PropTypes from 'prop-types';
import React, { Component } from 'react';

import SpaceshipView from './spaceship_noguide';

class Spaceship extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      animateText: false,
    };
  }
  onEnter = () => {
    const { animationDuration } = this.props;
    this.updateAnimation(animationDuration);
  }
  updateAnimation = (timeout) => {
    clearTimeout(this.timeoutID);
    this.setState({ animateText: true });
    this.timeoutID = setTimeout(() => {
      this.setState({ animateText: false });
    }, timeout);
  }
  render() {
    const { onEnter, ...otherProps } = this.props;
    const { animateText, inputText } = this.state;
    return (
      <SpaceshipView
        animateText={animateText}
        inputText={inputText}
        {...otherProps}
        onEnter={this.onEnter}
      />
    );
  }
}

Spaceship.defaultProps = {
  animationDuration: 1000,
  animationName: null,
  focusText: 'Warming tractor beam...',
  onEnter: null,
  placeholderText: 'Placeholder...',
};

Spaceship.propTypes = {
  /** Animation length in ms */
  animationDuration: PropTypes.number,
  /** Animateion class name */
  animationName: PropTypes.string,
  /** Text to use for placeholder on focus. */
  focusText: PropTypes.string,
  /** The function to call on hitting the enter key. */
  onEnter: PropTypes.func,
  /** Text to use for placeholder. */
  placeholderText: PropTypes.string,
};

export default Spaceship;
