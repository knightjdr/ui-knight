import PropTypes from 'prop-types';
import React, { Component } from 'react';

import MenuContent from './navbar__menu-content_noguide';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMenu: false,
    };
  }
  closeMenu = () => {
    this.setState({
      viewMenu: false,
    });
  }
  showMenu = () => {
    this.setState(prevState => ({
      viewMenu: !prevState.viewMenu,
    }));
  }
  render() {
    const { links } = this.props;
    const { viewMenu } = this.state;
    return (
      <MenuContent
        links={links}
        closeMenu={this.closeMenu}
        showMenu={this.showMenu}
        viewMenu={viewMenu}
      />
    );
  }
}

Menu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.bool,
    route: PropTypes.string,
    props: PropTypes.shape({}),
    text: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
  })).isRequired,
};

export default Menu;
