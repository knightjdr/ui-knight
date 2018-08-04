import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = links => (
  links.map((link) => {
    if (link.href) {
      return (
        <a
          className="knight-ui-navbar__link"
          href={link.route}
          key={link.text}
          {...link.props}
        >
          { link.text }
        </a>
      );
    }
    return (
      <NavLink
        className="knight-ui-navbar__link"
        key={link.text}
        to={link.route}
      >
        { link.text }
      </NavLink>
    );
  })
);

export default Links;
