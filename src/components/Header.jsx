import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Menu stackable >
                <Menu.Item as={Link} to="/">
                    <img src='/logo.png' />
                </Menu.Item>
                <Menu.Item as={NavLink} exact to="/" name="home" />
                <Menu.Item as={NavLink} exact to="/md" name="MD" />
            </Menu>
        )
    }
}

export default Header;