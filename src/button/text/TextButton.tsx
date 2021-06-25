import React from 'react';
import styled from 'styled-components';

import Button, { ButtonProps, defaultProps as defaultButtonProps } from '../Button';

const defaultProps = {
  ...defaultButtonProps,
  className: '',
};

const ButtonWithExtendedStyle = styled(Button)`
  border-radius: 0.2rem;
  border-style: solid;
  border-width: 0.125rem;
  box-sizing: border-box;
  font-size: inherit;
  padding: 0.2rem 0.5rem;
`;

export interface TextButtonProps extends ButtonProps {
  /**
   * Class to add. Will always have 'uiknight-button'.
   */
  className: string;
}

/**
 * Button with text
 */
const TextButton = ({
  backgroundColor,
  className,
  color,
  disabled,
  kind = 'primary',
  shadow,
  ...props
}: TextButtonProps) => {
  const classes = ['uiknight-button'];
  if (className) {
    classes.push(className);
  }

  return (
    <ButtonWithExtendedStyle
      backgroundColor={backgroundColor}
      color={color}
      disabled={disabled}
      kind={kind}
      shadow={shadow}
      {...props}
    />
  );
};

TextButton.defaultProps = defaultProps;

export default TextButton;
