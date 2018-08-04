import React from 'react';
import { shallow } from 'enzyme';

import Menu from './menu-container';

const links = [{
  route: '/testroute',
  text: 'testroute',
}];

describe('Menu', () => {
  test('Calling menu open and close changes state', () => {
    const wrapper = shallow(<Menu links={links} />);
    // Initial state (menu closed)).
    expect(wrapper.state('viewMenu')).toBeFalsy();
    // Show menu changes state.
    wrapper.instance().showMenu();
    expect(wrapper.state('viewMenu')).toBeTruthy();
    wrapper.instance().showMenu();
    expect(wrapper.state('viewMenu')).toBeFalsy();
    // Close backdrop hides menu.
    wrapper.setState({ viewMenu: true });
    wrapper.instance().closeBackdrop();
    expect(wrapper.state('viewMenu')).toBeFalsy();
  });
});
