import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../logo.svg';

class Header extends Component {
    render() {
        return (
            <Menu  >
                <Menu.Item as={Link} to="/">
                    <img src={logo} alt="logo" />
                </Menu.Item>
                <Menu.Item as={NavLink} exact to="/" name="Do Obejrzenia" />
                <Menu.Item as={NavLink} exact to="/watched" name="Obejrzane" />
            </Menu>
        )
    }
}

export default Header;