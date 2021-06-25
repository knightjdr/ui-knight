import styled, { css, DefaultTheme } from 'styled-components';

export const defaultProps = {
  backgroundColor: '',
  color: '',
  disabled: false,
  kind: 'primary' as const,
  shadow: false,
};

export interface ButtonProps {
  /**
   * The button color. Overrides the color applied by the "kind" property and also the theme.
   */
  backgroundColor: string;
  /**
   * Text color.
   */
  color: string
  /**
   * Disable the button.
   */
  disabled: boolean;
  /**
   * Button appearance.
   */
  kind: 'alert' | 'primary' | 'success' | 'warning';
  /**
   * Add a shadow.
   */
  shadow: boolean;
}

const defineButtonColor = (backgroundColor: string, kind: string, theme: DefaultTheme): string => {
  if (backgroundColor) {
    return backgroundColor;
  } if (kind === 'alert') {
    return theme?.palette?.alert || '#ffe14d';
  } if (kind === 'primary') {
    return theme?.palette?.primary || '#1ea7fd';
  } if (kind === 'palette') {
    return theme?.palette?.success || '#56b85b';
  } if (kind === 'warning') {
    return theme?.palette?.warning || '#f7706a';
  }
  return '#1ea7fd';
};

const Button = styled.button<ButtonProps>`
  background-color: transparent;
  border-color: transparent;
  box-sizing: border-box;
  color: ${({ color, theme }) => {
    if (color) {
      return color;
    } if (theme?.palette?.common?.black) {
      return theme.palette.common.black;
    }
    return '#333';
  }};
  font-family: inherit;
  position: relative;
  transform-origin: center;
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: cubic-bezier(.17, .67, .16, .99);

  &::after {
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: cubic-bezier(.17, .67, .16, .99);
    width: 100%;
    z-index: -1;
  }
  &::before {
    background-color: #fff;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }

  &:focus:not([disabled])::after,
  &:hover:not([disabled])::after {
    opacity: 0.5;
  }

  ${(props) => (props.disabled
    && css`
    & {
      background-color: #c2c0c0;
      border-color: #c2c0c0;
      cursor: not-allowed;
    }
    `
  )};

  ${(props) => (props.shadow
    && css`
    & {
      box-shadow: 0 0.125rem 0.3rem 0 rgba(0, 0, 0, 0.26);
    }
    `
  )};

  &:active {
    animation-duration: 0.3s;
    animation-name: click;
    animation-timing-function: cubic-bezier(.17, .67, .16, .99);
  }

  @keyframes click {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(0.85);
    }

    100% {
      transform: scale(1);
    }
  }

  ${({ backgroundColor, kind, theme }) => {
    const buttonColor: string = defineButtonColor(backgroundColor, kind, theme);
    return `
      &:not([disabled]) {
      border-color: ${buttonColor};
    }
    &::after{
      background-color: ${buttonColor};
    }
    `;
  }}
`;

Button.defaultProps = defaultProps;

export default Button;
