import React from 'react';
import { shallow } from 'enzyme';

import MenuContent from './menu-content';

const closeBackdrop = jest.fn();
const links = [{
  route: '/testroute',
  text: 'testroute',
}];
const showMenu = jest.fn();

describe('MenuContent', () => {
  test('Renders', () => {
    const wrapper = shallow(
      <MenuContent
        closeBackdrop={closeBackdrop}
        links={links}
        showMenu={showMenu}
        viewMenu={false}
      />,
    );
    expect(wrapper).toMatchSnapshot();
    // Pointer events for backdrop with menu closed is none.
    const backdropButton = wrapper.find('button').at(1);
    expect(backdropButton.props().style).toHaveProperty('pointerEvents', 'none');
    // Menu should have "hide" class
    const backdrop = backdropButton.find('div').first();
    expect(backdrop.hasClass('decred-ui-navbar-menu-hide')).toBeTruthy();
  });

  test('Menu opens show menu and changes backdrop pointer events', () => {
    const wrapper = shallow(
      <MenuContent
        closeBackdrop={closeBackdrop}
        links={links}
        showMenu={showMenu}
        viewMenu
      />,
    );
    expect(wrapper).toMatchSnapshot();
    // Pointer events for backdrop with menu closed is none.
    const backdropButton = wrapper.find('button').at(1);
    expect(backdropButton.props().style).toHaveProperty('pointerEvents', 'auto');
    // Menu should have "show" class
    const backdrop = backdropButton.find('div').first();
    expect(backdrop.hasClass('decred-ui-navbar-menu-show')).toBeTruthy();
  });

  test('buttons respond', () => {
    const wrapper = shallow(
      <MenuContent
        closeBackdrop={closeBackdrop}
        links={links}
        showMenu={showMenu}
        viewMenu
      />,
    );
    const menu = wrapper.find('button').first();
    menu.simulate('click');
    expect(showMenu).toHaveBeenCalledTimes(1);
    const backdrop = wrapper.find('button').at(1);
    backdrop.simulate('click');
    expect(closeBackdrop).toHaveBeenCalledTimes(1);
  });
});
