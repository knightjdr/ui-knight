import PropTypes from 'prop-types';
import React, { Component } from 'react';

// Adds a class on click and removes it after the prop timeout.
const AnimateOnClick = (WrappedComponent) => {
  class _AnimateOnClick extends Component {
    constructor(props) {
      super(props);
      this.state = {
        active: false,
      };
    }
    onEnter = (e) => {
      const { animationDuration, onEnter } = this.props;
      switch (e.key) {
        case 'Enter':
          this.updateAnimation(animationDuration);
          onEnter(e);
          break;
        default:
          break;
      }
    }
    updateAnimation = (timeout) => {
      clearTimeout(this.timeoutID);
      this.setState({ active: true });
      this.timeoutID = setTimeout(() => {
        this.setState({ active: false });
      }, timeout);
    }
    render() {
      // Remove props consumed by this handler.
      const {
        animationDuration,
        animationName,
        className,
        onEnter,
        ...otherProps
      } = this.props;
      const { active } = this.state;

      // Update className based on animation state.
      const classes = [];
      if (className) {
        classes.push(className);
      }
      if (active) {
        classes.push(animationName);
      }
      return (
        <WrappedComponent
          className={classes.join(' ')}
          onEnter={this.onEnter}
          {...otherProps}
        />
      );
    }
  }

  _AnimateOnClick.defaultProps = {
    animationDuration: 1000,
    className: null,
    onEnter: () => {},
  };

  _AnimateOnClick.propTypes = {
    animationDuration: PropTypes.number,
    animationName: PropTypes.string.isRequired,
    className: PropTypes.string,
    onEnter: PropTypes.func,
  };

  return _AnimateOnClick;
};

export default AnimateOnClick;
