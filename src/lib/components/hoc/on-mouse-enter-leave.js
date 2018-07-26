import PropTypes from 'prop-types';
import React, { Component } from 'react';

// Adds on enter
const OnMouseEnterLeave = (WrappedComponent) => {
  class _OnMouseEnterLeave extends Component {
    onMouseEnter = () => {
      console.log('enter');
    }
    onMouseLeave= () => {
      console.log('leave');
    }
    render() {
      return (
        <WrappedComponent
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          {...this.props}
        />
      );
    }
  }

  _OnMouseEnterLeave.defaultProps = {
    onEnter: () => {},
  };

  _OnMouseEnterLeave.propTypes = {
    onEnter: PropTypes.func,
  };

  return _OnMouseEnterLeave;
};

export default OnMouseEnterLeave;
