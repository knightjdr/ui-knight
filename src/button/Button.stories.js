import React from 'react';

import Button from './Button';

export default {
  title: 'Examples/Button',
  component: Button,
};

const Template = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  kind: 'primary',
};

export const Shadow = Template.bind({});
Shadow.args = {
  kind: 'primary',
  shadow: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
