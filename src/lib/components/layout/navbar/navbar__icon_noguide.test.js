import * as moduleToMock from 'react-router-dom';

import IconLink from './iconlink-helper';

// mock Navlink
moduleToMock.NavLink = 'div';

const icon = 'icon';
const link = {
  route: '/testroute',
};
const urlLink = {
  href: true,
  route: 'testroute.com',
};
const urlLinkNew = {
  href: true,
  newTab: true,
  route: 'testroute.com',
};

describe('IconLink', () => {
  test('Default settings with react-router link', () => {
    const content = IconLink(icon, link);
    // Should be a div.
    expect(content.type).toBe('div');
    // Has logo link className
    expect(content.props.className).toBe('decred-ui-navbar-logo-link');
    // Has correct route.
    expect(content.props.to).toBe('/testroute');
  });

  test('URL link set to open in current tab', () => {
    const content = IconLink(icon, urlLink);
    // Should be a link.
    expect(content.type).toBe('a');
    // Has logo link className
    expect(content.props.className).toBe('decred-ui-navbar-logo-link');
    // Has correct route.
    expect(content.props.href).toBe('testroute.com');
    // Does not have rel and target props.
    expect(content.props.rel).toBeUndefined();
    expect(content.props.target).toBeUndefined();
  });

  test('URL link set to open in new tab', () => {
    const content = IconLink(icon, urlLinkNew);
    // Has rel and target props.
    expect(content.props.rel).toBe('noreferrer nofollow');
    expect(content.props.target).toBe('_blank');
  });
});
