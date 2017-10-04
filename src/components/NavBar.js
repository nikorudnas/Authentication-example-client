import React, { Component } from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import './css/NavBar.scss';

// Mobile
import IconButton from 'material-ui/IconButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

// Material ui
import Movie from 'material-ui/svg-icons/av/movie';
import Accessibility from 'material-ui/svg-icons/action/accessibility';
import Exit from 'material-ui/svg-icons/action/exit-to-app';
import { grey200, grey700 } from 'material-ui/styles/colors';

const MediaQuery = require('react-responsive');

const toolbarStyle = {
    backgroundColor: grey200
}

const iconStyle = {
    color: grey700,
    margin: '5px',
    cursor: 'pointer'
}

const toolbartitleStyle = {
    marginRight: '10px',
    cursor: 'pointer'
}

const titleStyle = {
    color: grey700,
    cursor: 'pointer'
}

const MenuItemStyle = {
    float: 'left',
    margin: 12
}

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            anchorEl: null
        };
    }


    handleTouchTap = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({ open: true, anchorEl: event.currentTarget });
    };

    handleRequestClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <MediaQuery maxDeviceWidth={768}>
                    <Toolbar style={toolbarStyle}>
                        <ToolbarGroup>
                            <ToolbarTitle
                                style={titleStyle}
                                text="Main"
                                onTouchTap={() => this.props.history.push('/')} />
                        </ToolbarGroup>
                        <ToolbarGroup>
                            <IconButton onTouchTap={this.handleTouchTap} label="Click me"><MenuIcon /></IconButton>
                            <Popover
                                open={this.state.open}
                                anchorEl={this.state.anchorEl}
                                anchorOrigin={{
                                    horizontal: 'left',
                                    vertical: 'bottom'
                                }}
                                targetOrigin={{
                                    horizontal: 'left',
                                    vertical: 'top'
                                }}
                                onRequestClose={this.handleRequestClose}>
                                <Menu>
                                    <MenuItem
                                        primaryText={< Movie style={
                                            MenuItemStyle
                                        } />}
                                        onTouchTap={() => this.props.history.push('/medias')}>Medias</MenuItem>
                                    <MenuItem
                                        primaryText={< Accessibility style={
                                            MenuItemStyle
                                        } />}
                                        onTouchTap={() => this.props.history.push('/profile')}>Profile</MenuItem>
                                    <MenuItem
                                        primaryText={< Exit style={
                                            MenuItemStyle
                                        } />}
                                        onTouchTap={() => this.props.history.push('/logout')}>Exit</MenuItem>
                                </Menu>
                            </Popover>
                        </ToolbarGroup>
                    </Toolbar>
                </MediaQuery>
                <MediaQuery minDeviceWidth={769}>
                    <Toolbar style={toolbarStyle}>
                        <ToolbarGroup>
                            <ToolbarTitle
                                style={titleStyle}
                                text="Main"
                                onTouchTap={() => this.props.history.push('/')} />
                        </ToolbarGroup>
                        <ToolbarGroup>
                            <Movie
                                style={iconStyle}
                                onTouchTap={() => this.props.history.push('/medias')} />
                            <ToolbarTitle
                                style={toolbartitleStyle}
                                text="Medias"
                                onTouchTap={() => this.props.history.push('/medias')} />
                            <Accessibility
                                style={iconStyle}
                                onTouchTap={() => this.props.history.push('/profile')} />
                            <ToolbarTitle
                                style={toolbartitleStyle}
                                text="Profile"
                                onTouchTap={() => this.props.history.push('/profile')} />
                            <Exit
                                style={iconStyle}
                                onTouchTap={() => this.props.history.push('/logout')} />
                            <ToolbarTitle
                                style={toolbartitleStyle}
                                text="Log Out"
                                onTouchTap={() => this.props.history.push('/logout')} />
                        </ToolbarGroup>
                    </Toolbar>
                </MediaQuery >
            </div>
        );
    }
}

export default NavBar;