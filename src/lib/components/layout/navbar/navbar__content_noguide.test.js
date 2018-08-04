import React from 'react';
import { shallow } from 'enzyme';

import Color from '../../../shared/color';
import LinksHelper from './links-helper';
import Logo from '../../../shared/logo';
import Navbar from './navbar-content';
import Theme from '../../../shared/theme';

// Mocks.
jest.mock('../../../shared/color');

// Mock links.
jest.mock('./links-helper');

// Mock logo.
jest.mock('../../../shared/logo');
Logo.mockReturnValue('logo');

// Mock theme.
jest.mock('../../../shared/theme');
Theme.mockReturnValue({
  accent1: '#000',
  accent2: '#000',
  className: 'decred-ui-navbar-primaryNegative',
  primary: '#000',
  text: '#000',
});
jest.mock('../../../shared/theme');

const links = [{
  route: '/testroute',
  text: 'testroute',
}];
const logoLink = {
  route: '/testroute',
};

describe('Navbar', () => {
  afterEach(() => {
    jest.clearAllMocks();
    Color.mockReturnValue('#000');
  });

  test('Default render', () => {
    const wrapper = shallow(
      <Navbar
        background
        boxShadow
        fixed
        icon="dcr"
        links={links}
        logoLink={logoLink}
        smallScreen={false}
        style={{}}
        theme="primaryNegative"
      />,
    );
    expect(wrapper).toMatchSnapshot();
    // Has defining class.
    expect(wrapper.hasClass('decred-ui-navbar')).toBeTruthy();
    // Has background.
    expect(wrapper.hasClass('decred-ui-navbar-default')).toBeTruthy();
    // Has boxshadow and position fixed.
    expect(wrapper.props().style).toHaveProperty(
      'boxShadow',
      '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    );
    expect(wrapper.props().style).toHaveProperty('position', 'fixed');
    // Has links rather than menu.
    expect(LinksHelper).toHaveBeenCalledTimes(1);
    // Theme
    expect(Theme).toHaveBeenCalledTimes(1);
    expect(Theme).toHaveBeenCalledWith('primaryNegative', 'navbar');
    // Logo
    expect(Color).toHaveBeenCalledTimes(2);
    expect(Color).toHaveBeenCalledWith(null);
    expect(Logo).toHaveBeenCalledTimes(1);
    expect(Logo).toHaveBeenCalledWith('#000', '#000', 25, 'dcr');
  });

  test('Transparent background', () => {
    const wrapper = shallow(
      <Navbar
        background={false}
        boxShadow
        fixed
        icon="dcr"
        links={links}
        logoLink={logoLink}
        smallScreen={false}
        style={{}}
        theme="primaryNegative"
      />,
    );
    expect(wrapper).toMatchSnapshot();
    // Has no background.
    expect(wrapper.hasClass('decred-ui-navbar-transparent')).toBeTruthy();
    // Has no boxshadow.
    expect(wrapper.props().style).toHaveProperty('boxShadow', null);
  });

  test('Small screen has menu rather than links', () => {
    const wrapper = shallow(
      <Navbar
        background
        boxShadow
        fixed
        icon="dcr"
        links={links}
        logoLink={logoLink}
        smallScreen
        style={{}}
        theme="primaryNegative"
      />,
    );
    expect(wrapper).toMatchSnapshot();
    // Has menu.
    expect(LinksHelper).not.toHaveBeenCalled();
  });

  test('Changing icon, icon color and theme calls their functions correctly', () => {
    Color.mockReturnValue('#FD714A');
    const wrapper = shallow(
      <Navbar
        background
        boxShadow
        fixed
        icon="atomic"
        iconColor="orange"
        links={links}
        logoLink={logoLink}
        smallScreen={false}
        style={{}}
        theme="primaryBlue"
      />,
    );
    expect(wrapper).toMatchSnapshot();
    // Theme
    expect(Theme).toHaveBeenCalledTimes(1);
    expect(Theme).toHaveBeenCalledWith('primaryBlue', 'navbar');
    // Logo
    expect(Color).toHaveBeenCalledTimes(2);
    expect(Color).toHaveBeenCalledWith('orange');
    expect(Logo).toHaveBeenCalledTimes(1);
    expect(Logo).toHaveBeenCalledWith('#FD714A', '#FD714A', 25, 'atomic');
  });

  test('No shadow', () => {
    const wrapper = shallow(
      <Navbar
        background
        boxShadow={false}
        fixed
        icon="dcr"
        links={links}
        logoLink={logoLink}
        smallScreen={false}
        style={{}}
        theme="primaryNegative"
      />,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.props().style).toHaveProperty('boxShadow', null);
  });

  test('Change position to absolute', () => {
    const wrapper = shallow(
      <Navbar
        background
        boxShadow
        fixed={false}
        icon="dcr"
        links={links}
        logoLink={logoLink}
        smallScreen={false}
        style={{}}
        theme="primaryNegative"
      />,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.props().style).toHaveProperty('position', 'absolute');
  });

  test('Custom style overrides defaults', () => {
    const wrapper = shallow(
      <Navbar
        background
        boxShadow
        fixed
        icon="dcr"
        links={links}
        logoLink={logoLink}
        smallScreen={false}
        style={{ position: 'relative' }}
        theme="primaryNegative"
      />,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.props().style).toHaveProperty('position', 'relative');
  });
});
