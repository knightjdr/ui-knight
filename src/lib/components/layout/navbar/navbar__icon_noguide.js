import React from 'react';
import { NavLink } from 'react-router-dom';

const IconLink = link => (
  link.href
    ? (
      <a
        className="knight-ui-navbar__logo-link"
        href={link.route}
        {...link.props}
      >
        <div className="knight-ui-navbar__logo" />
      </a>
    )
    : (
      <NavLink
        className="knight-ui-navbar__logo-link"
        to={link.route}
      >
        <div className="knight-ui-navbar__logo" />
      </NavLink>
    )
);

export default IconLink;
