import React, { Component } from 'react'
import { Menu, Button, Input } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { refreshMovies, filterMovies } from '../actions';
import { withRouter } from 'react-router-dom'
import logo from '../logo.svg';

class Header extends Component {

    filterMovies = (e) => {
        const { value } = e.target;
        this.props.filterMovies(value)
    }

    render() {
        const { refreshMovies, isRefreshing } = this.props;
        return (
            <Menu>
                <Menu.Item as={Link} to="/">
                    <img src={logo} alt="logo" />
                </Menu.Item>
                <Menu.Item as={NavLink} exact to="/" name="Do Obejrzenia" />
                <Menu.Item as={NavLink} exact to="/watched" name="Obejrzane" />
                <Menu.Menu position='right'>
                    <Menu.Item >
                        <Input
                            onChange={this.filterMovies}
                            icon='search'
                            placeholder='Search...'
                            name="filter"
                        />
                    </Menu.Item>
                    <Menu.Item  >
                        <Button
                            loading={isRefreshing}
                            basic
                            onClick={refreshMovies}
                            circular
                            icon='sync'
                        />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isRefreshing: state.freshener,
    };
};


export default withRouter(connect(
    mapStateToProps,
    { refreshMovies, filterMovies }
)(Header));