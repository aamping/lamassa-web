import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';

import * as reducers from '../reducers';
import { userLogout } from '../actions/authActions';
import { handleDrawer } from '../actions/userActions';
import './AppBarTitle.css';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    height: 430,
    marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden'
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'fixed',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#90ae68',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 15,
  },
  hide: {
    display: 'none',
  },
});

class AppBarTitle extends Component {
  state = {
    open: false,
    anchorEl: null
  };

  handleMenu = event => {
  this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleDrawerOpen = () => {
    this.props.handleDrawer({ open: true });
  };

  handleDrawerClose = () => {
    this.props.handleDrawer({ open: false });
  };

  handleLogout() {
    this.props.userLogout();
  }

  render() {
    const { classes, isAuthenticated, userInfo } = this.props;
    const { anchorEl } = this.state;
    const openProfileMenu = Boolean(anchorEl);

    return (
          <AppBar className={classNames(classes.appBar, this.props.open && classes.appBarShift)}>
            <Toolbar className="appbar-container" disableGutters={!this.props.open}>
              <IconButton
                color="contrast"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, this.props.open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <div style={{ fontFamily: "'Barrio', cursive", fontSize: '2em', color: '#ebf9d6' }}>
                {userInfo ? userInfo.lloc_entrega.nom : ''}
              </div>
              {isAuthenticated && (
                <div className='profile-icon'>
                  <IconButton
                    aria-owns={openProfileMenu ? 'menu-appbar' : null}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="contrast"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={openProfileMenu}
                    onClose={this.handleClose}
                  >
                    <Link className="nohyperlink" to={`/userprofile`}><MenuItem onClick={this.handleClose}>Profile</MenuItem></Link>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    <MenuItem onClick={this.handleLogout.bind(this)}>Desconectar</MenuItem>
                  </Menu>
                </div>
              )}
            </Toolbar>
          </AppBar>
    );
  }
}

AppBarTitle.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: reducers.isAuthenticated(state),
  open: state.user.open,
  userInfo: state.user.user,
})

export default compose(
  withStyles(styles, { name: 'AppBarTitle', withTheme: true }),
  connect(mapStateToProps, { userLogout, handleDrawer }),
)(AppBarTitle);
