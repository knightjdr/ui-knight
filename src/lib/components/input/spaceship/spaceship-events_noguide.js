import PropTypes from 'prop-types';
import React, { Component } from 'react';

// Adds on enter
const SpaceshipEvents = (WrappedComponent) => {
  class _SpaceshipEvents extends Component {
    constructor(props) {
      super(props);
      this.state = {
        spaceship: {
          animation: null,
          opacity: 0,
          translate: 0,
        },
      };
    }
    onMouseEnter = () => {
      this.setState({
        spaceship: {
          animation: 'hover',
          opacity: 1,
          translate: -60,
        },
      });
    }
    onMouseLeave= () => {
      this.setState({
        spaceship: {
          animation: null,
          opacity: 0,
          translate: 0,
        },
      });
    }
    render() {
      const { spaceship } = this.state;
      return (
        <WrappedComponent
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          spaceship={spaceship}
          {...this.props}
        />
      );
    }
  }

  _SpaceshipEvents.defaultProps = {
    onEnter: () => {},
  };

  _SpaceshipEvents.propTypes = {
    onEnter: PropTypes.func,
  };

  return _SpaceshipEvents;
};

export default SpaceshipEvents;
