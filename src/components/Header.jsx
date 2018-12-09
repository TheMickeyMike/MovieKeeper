import React, { Component } from 'react'
import { Menu, Label } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../logo.svg';

class Header extends Component {
    render() {
        return (
            <Menu  >
                <Menu.Item as={Link} to="/">
                    <img src={logo} alt="logo" />
                </Menu.Item>
                <Menu.Item as={NavLink} exact to="/" name="lista" />
                <Menu.Item as={NavLink} exact to="/pending" name="Nowe" />
            </Menu>
        )
    }
}

export default Header;