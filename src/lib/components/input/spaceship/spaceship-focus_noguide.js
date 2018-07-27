import PropTypes from 'prop-types';
import React, { Component } from 'react';

// Adds on enter
const OnFocus = (WrappedComponent) => {
  class _OnFocus extends Component {
    constructor(props) {
      super(props);
      const { placeholderText } = this.props;
      this.state = {
        placeholder: placeholderText,
      };
    }
    onBlur = () => {
      const { placeholderText } = this.props;
      this.setState({
        placeholder: placeholderText,
      });
    }
    onFocus = () => {
      const { focusText } = this.props;
      this.setState({
        placeholder: focusText,
      });
    }
    render() {
      const { focusText, placeholderText, ...otherProps } = this.props;
      const { placeholder } = this.state;
      return (
        <WrappedComponent
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          placeholder={placeholder}
          {...otherProps}
        />
      );
    }
  }

  _OnFocus.defaultProps = {
    focusText: 'Warming tractor beam...',
    placeholderText: 'Placeholder...',
  };

  _OnFocus.propTypes = {
    focusText: PropTypes.string,
    placeholderText: PropTypes.string,
  };

  return _OnFocus;
};

export default OnFocus;
