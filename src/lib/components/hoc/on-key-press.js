import PropTypes from 'prop-types';
import React, { Component } from 'react';

// Adds on enter
const OnKeyPress = (WrappedComponent) => {
  class _OnKeyPress extends Component {
    onKeyPress = (e) => {
      e.preventDefault();
      const { onEnter } = this.props;
      switch (e.key) {
        case 'Enter':
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
          onClick={this.onClick}
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
