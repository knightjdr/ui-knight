import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import ClickOutside from '../../hoc/click-outside';

const MenuLinks = ({
  close,
  links,
  view,
}) => (
  <ClickOutside callback={close}>
    <div className={`knight-ui-navbar__menu-inner ${view ? 'knight-ui-navbar__menu_show' : 'knight-ui-navbar__menu_hide'}`}>
      <ul>
        {
          links.map((link) => {
            if (link.href) {
              return (
                <a
                  href={link.route}
                  key={link.text}
                  {...links.props}
                >
                  <li>
                    { link.text }
                  </li>
                </a>
              );
            }
            return (
              <NavLink
                key={link.text}
                to={link.route}
              >
                <li>
                  { link.text }
                </li>
              </NavLink>
            );
          })
        }
      </ul>
    </div>
  </ClickOutside>
);

MenuLinks.propTypes = {
  close: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.bool,
    route: PropTypes.string,
    props: PropTypes.shape({}),
    text: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
  })).isRequired,
  view: PropTypes.bool.isRequired,
};

export default MenuLinks;
