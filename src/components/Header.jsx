import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { refreshMovies } from '../actions';
import logo from '../logo.svg';

class Header extends Component {
    render() {
        const { refreshMovies, isRefreshing } = this.props;
        console.log(isRefreshing)
        return (
            <Menu>
                <Menu.Item as={Link} to="/">
                    <img src={logo} alt="logo" />
                </Menu.Item>
                <Menu.Item as={NavLink} exact to="/" name="Do Obejrzenia" />
                <Menu.Item as={NavLink} exact to="/watched" name="Obejrzane" />
                <Menu.Item position='right'>
                    <Button
                        loading={isRefreshing}
                        basic
                        onClick={refreshMovies}
                        circular
                        icon='sync'
                    />
                </Menu.Item>
            </Menu>
        )
    }
}

// export default Header;

const mapStateToProps = (state) => {
    return {
        isRefreshing: state.freshener,
        //   refreshError: state.movieAddForm.error,
    };
};


export default connect(
    mapStateToProps,
    { refreshMovies }
)(Header);