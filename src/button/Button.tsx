import React from 'react';
import styled from 'styled-components';

import ButtonDefaultStyled from './button-defaults';

const ButtonStyled = styled(ButtonDefaultStyled)`
  border-radius: 0.2rem;
  border-style: solid;
  border-width: 0.125;
  box-sizing: border-box;
  font-size: inherit;
  padding: 0.2rem 0.5rem;
`;

export interface ButtonProps {
  /**
   * Class to add. Will always have 'uiknight-button'.
   */
   className?: string;
   /**
    * Disable the button.
    */
   disabled?: boolean;
   /**
    * Button appearance.
    */
   kind?: 'alert' | 'primary' | 'success' | 'warning';
   /**
    * Add a shadow.
    */
   shadow?: boolean;
}

/**
 * Button with text
 */
const Button = ({
  className,
  disabled,
  kind = 'primary',
  shadow,
  ...props
}: ButtonProps) => {
  const classes = ['uiknight-button'];
  if (className) {
    classes.push(className);
  }

  return (
    <ButtonStyled
      disabled={disabled}
      kind={kind}
      shadow={shadow}
      {...props}
    />
  );
};

Button.defaultProps = {
  className: '',
  disabled: false,
  kind: 'primary',
  shadow: false,
};

export default Button;
