import React from 'react';
import { ThemeProvider } from 'styled-components';

import ButtonRectangular from './ButtonRectangular';

export default {
  title: 'Examples/Button',
  component: ButtonRectangular,
};

const Template = (args) => <ButtonRectangular {...args}>Button</ButtonRectangular>;

export const Primary = Template.bind({});
Primary.args = {
  kind: 'primary',
};

export const Shadow = Template.bind({});
Shadow.args = {
  shadow: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Custom = Template.bind({});
Custom.args = {
  backgroundColor: '#8ce6cd',
  color: '#a81591',
};

const theme = {
  palette: {
    primary: '#db8ce6',
  },
};
const ThemedTemplate = (args) => (
  <ThemeProvider theme={theme}>
    <ButtonRectangular {...args}>Button</ButtonRectangular>
  </ThemeProvider>
);

export const Themed = ThemedTemplate.bind({});
