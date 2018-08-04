import PropTypes from 'prop-types';
import React from 'react';

import Icon from './navbar__icon_noguide';
import Links from './navbar__links_noguide';
import Menu from './navbar__menu-container_noguide';

import './navbar.css';

const NavbarContent = ({
  background,
  fixed,
  links,
  logoLink,
  shadow,
  smallScreen,
  ...props
}) => {
  const classes = ['knight-ui-navbar'];
  if (background) classes.push('knight-ui-navbar_background');
  if (background && shadow) classes.push('knight-ui-navbar_shadow');
  if (!fixed) classes.push('knight-ui-navbar_absolute');
  return (
    <div
      className={classes.join(' ')}
      {...props}
    >
      { Icon(logoLink) }
      <div className="knight-ui-navbar__links">
        { smallScreen ? <Menu links={links} /> : Links(links) }
      </div>
    </div>
  );
};

NavbarContent.propTypes = {
  background: PropTypes.bool.isRequired,
  fixed: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.bool,
    route: PropTypes.string,
    props: PropTypes.shape({}),
    text: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
  })).isRequired,
  logoLink: PropTypes.shape({
    href: PropTypes.bool,
    route: PropTypes.string,
  }).isRequired,
  shadow: PropTypes.bool.isRequired,
  smallScreen: PropTypes.bool.isRequired,
};

export default NavbarContent;
