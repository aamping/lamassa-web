import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import LoginForm from '../components/LoginForm';
import { login } from '../actions/authActions';
import { authErrors, isAuthenticated } from '../reducers';

const styles = {
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: '#f7ecb5',
    paddingTop: 24,
    // height: 'calc(100% - 56px)',
    marginTop: 56,
    // [theme.breakpoints.up('sm')]: {
    //   height: 'calc(100% - 64px)',
    //   marginTop: 64,
    // },
    overflow: 'hidden',
  },
};

const LoginScreen = (props) => {
  if (props.isAuthenticated) {
    return (
      <Redirect to="/" />
    );
  }
  return (
    <div style={styles.content}>
      <LoginForm {...props} />
    </div>
  );
};

const mapStateToProps = state => ({
  errors: authErrors(state),
  isAuthenticated: isAuthenticated(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (username, password) => {
    dispatch(login(username, password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
