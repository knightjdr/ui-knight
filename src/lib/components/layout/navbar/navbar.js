import PropTypes from 'prop-types';
import React, { Component } from 'react';

import NavbarContent from './navbar__content_noguide';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSmallScreen: this.smallScreen(),
    };
  }
  componentDidMount = () => {
    window.addEventListener('resize', this.onResize);
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.onResize);
  }
  onResize = () => {
    this.setState({
      isSmallScreen: this.smallScreen(),
    });
  }
  smallScreen = () => {
    const { smallScreenSize } = this.props;
    return window.innerWidth <= smallScreenSize;
  }
  render() {
    const {
      background,
      shadow,
      fixed,
      links,
      logoLink,
      smallScreenSize,
      ...otherProps
    } = this.props;
    const { isSmallScreen } = this.state;
    return (
      <NavbarContent
        background={background}
        fixed={fixed}
        links={links}
        logoLink={logoLink}
        shadow={shadow}
        smallScreen={isSmallScreen}
        {...otherProps}
      />
    );
  }
}

Navbar.defaultProps = {
  background: true,
  fixed: true,
  links: [],
  logoLink: {
    route: '/',
  },
  smallScreenSize: 680,
  shadow: true,
};

Navbar.propTypes = {
  /** Show the background. If false, a transparent background will be used */
  background: PropTypes.bool,
  /** Fix the navbar to the top of the viewport */
  fixed: PropTypes.bool,
  /** Navigation links */
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.bool,
    route: PropTypes.string,
    props: PropTypes.shape({}),
    text: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
  })),
  /** Logo link */
  logoLink: PropTypes.shape({
    href: PropTypes.bool,
    route: PropTypes.string,
  }),
  /** Add shadow */
  shadow: PropTypes.bool,
  /** The width in pixels to use for determining small screen */
  smallScreenSize: PropTypes.number,
};

export default Navbar;
