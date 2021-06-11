import styled, { css } from 'styled-components';

export interface ButtonDefaultStyleProps {
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

const ButtonDefaultStyled = styled.button<ButtonDefaultStyleProps>`
  background-color: transparent;
  border-color: transparent;
  box-sizing: border-box;
  transform-origin: center;
  transition-duration: 0.3s;
  transition-property: background-color, border-color, color;
  transition-timing-function: cubic-bezier(.17, .67, .16, .99);

  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }

  ${(props) => (props.disabled
    && css`& {
      cursor: not-allowed;
      opacity: 0.6;
    }`
  )};

  ${(props) => (props.shadow
    && css`& {
      box-shadow: 0 0.125rem 0.3rem 0 rgba(0, 0, 0, 0.26);
    }`
  )};

  ${(props) => (props.kind === 'alert'
    && css`& {
      background-color: #ffe14d;
      color: #421C1A;
    }
    &:focus:not([disabled]),
    &:hover:not([disabled]) {
      background-color: #F2F2F2;
      border-color: #ffe14d;
    }`
  )};

  ${(props) => (props.kind === 'primary'
    && css`& {
      background-color: #2A3132;
      color: #F2F2F2;
    }
    &:focus:not([disabled]),
    &:hover:not([disabled]) {
      background-color: #F2F2F2;
      border-color: #2A3132;
      color: #2A3132;
    }`
  )};

  ${(props) => (props.kind === 'success'
    && css`& {
      background-color: #026E07;
      color: #F2F2F2;
    }
    &:focus:not([disabled]),
    &:hover:not([disabled]) {
      background-color: #fff;
      border-color: #026E07;
      color: #026E07;
    }`
  )};

  ${(props) => (props.kind === 'warning'
    && css`&{
      background-color: #C2352A;
      color: #F2F2F2;
    }

    &:focus:not([disabled]),
    &:hover:not([disabled]) {
      background-color: #fff;
      border-color: #C2352A;
      color: #C2352A;
    }`
  )}

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
`;

ButtonDefaultStyled.defaultProps = {
  disabled: false,
  kind: 'primary',
  shadow: false,
};

export default ButtonDefaultStyled;
