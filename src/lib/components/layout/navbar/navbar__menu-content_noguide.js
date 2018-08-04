import PropTypes from 'prop-types';
import React from 'react';

import Bars from './navbar__menu-bars_noguide';
import MenuLinks from './navbar__menu-links_noguide';

import './menu.css';

const MenuContent = ({
  closeMenu,
  links,
  showMenu,
  viewMenu,
}) => (
  <div className="knight-ui-navbar__menu">
    <button
      className="knight-ui-navbar__menu-button"
      onClick={showMenu}
      type="button"
    >
      { Bars() }
    </button>
    <MenuLinks
      close={closeMenu}
      links={links}
      view={viewMenu}
    />
  </div>
);

MenuContent.propTypes = {
  closeMenu: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.bool,
    route: PropTypes.string,
    props: PropTypes.shape({}),
    text: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
  })).isRequired,
  showMenu: PropTypes.func.isRequired,
  viewMenu: PropTypes.bool.isRequired,
};

export default MenuContent;
