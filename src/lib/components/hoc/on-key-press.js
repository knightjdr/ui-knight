import PropTypes from 'prop-types';
import React, { Component } from 'react';

// Adds events on pressing specified keys. Only supports Enter currently.
const OnKeyPress = (WrappedComponent) => {
  class _OnKeyPress extends Component {
    onKeyPress = (e) => {
      const { onEnter } = this.props;
      switch (e.key) {
        case 'Enter':
          e.preventDefault();
          onEnter(e);
          break;
        default:
          break;
      }
    }
    render() {
      const { onEnter, ...otherProps } = this.props;
      return (
        <WrappedComponent
          onKeyPress={this.onKeyPress}
          {...otherProps}
        />
      );
    }
  }

  _OnKeyPress.defaultProps = {
    onEnter: () => {},
  };

  _OnKeyPress.propTypes = {
    onEnter: PropTypes.func,
  };

  return _OnKeyPress;
};

export default OnKeyPress;
