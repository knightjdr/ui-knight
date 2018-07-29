import PropTypes from 'prop-types';
import React, { Component } from 'react';

// Updates an inputs placholder text on focus.
const OnInputFocus = (WrappedComponent) => {
  class _OnInputFocus extends Component {
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

  _OnInputFocus.defaultProps = {
    focusText: 'Focus...',
    placeholderText: 'Placeholder...',
  };

  _OnInputFocus.propTypes = {
    focusText: PropTypes.string,
    placeholderText: PropTypes.string,
  };

  return _OnInputFocus;
};

export default OnInputFocus;
