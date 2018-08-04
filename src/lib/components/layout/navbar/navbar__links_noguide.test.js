import * as moduleToMock from 'react-router-dom';

import LinksHelper from './links-helper';

// mock Navlink
moduleToMock.NavLink = 'div';

const links = [{
  route: '/testroute',
  text: 'testroute',
}];
const urlLinks = [{
  href: true,
  route: 'testroute.com',
  text: 'testroute',
}];
const urlLinksNew = [{
  href: true,
  newTab: true,
  route: 'testroute.com',
  text: 'testroute',
}];

describe('LinksHelper', () => {
  test('Default settings with react-router link', () => {
    const content = LinksHelper(links);
    // Should return an array.
    expect(Array.isArray(content)).toBeTruthy();
    // Elements should be divs.
    expect(content[0].type).toBe('div');
    // Has link className
    expect(content[0].props.className).toBe('decred-ui-navbar-link');
    // Has correct route.
    expect(content[0].props.to).toBe('/testroute');
    // Has correct text.
    expect(content[0].props.children).toBe('testroute');
  });

  test('URL link set to open in current tab', () => {
    const content = LinksHelper(urlLinks);
    // Should return an array.
    expect(Array.isArray(content)).toBeTruthy();
    // Should be a link.
    expect(content[0].type).toBe('a');
    // Has link className
    expect(content[0].props.className).toBe('decred-ui-navbar-link');
    // Has correct route.
    expect(content[0].props.href).toBe('testroute.com');
    // Has correct text.
    expect(content[0].props.children).toBe('testroute');
    // Does not have rel and target props.
    expect(content[0].props.rel).toBeUndefined();
    expect(content[0].props.target).toBeUndefined();
  });

  test('URL link set to open in new tab', () => {
    const content = LinksHelper(urlLinksNew);
    // Has rel and target props.
    expect(content[0].props.rel).toBe('noreferrer nofollow');
    expect(content[0].props.target).toBe('_blank');
  });
});
