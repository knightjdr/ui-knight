import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import Button, { TextButtonProps } from './TextButton';

export default {
  title: 'Examples/Button/Text',
  component: Button,
} as Meta;

const Template: Story<TextButtonProps> = (args) => <Button {...args}>Button</Button>;

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
const ThemedTemplate: Story<TextButtonProps> = (args) => (
  <ThemeProvider theme={theme}>
    <Button {...args}>Button</Button>
  </ThemeProvider>
);

export const Themed = ThemedTemplate.bind({});
