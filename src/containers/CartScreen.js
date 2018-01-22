import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionList from '../components/ExpansionList';

const styles = theme => ({
  content: {
    display: 'flex',
    flex: 1,
    width: '100%',
    flexGrow: 1,
    backgroundColor: '#f7ecb5',
    paddingTop: 24,
    paddingLeft: 24,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
    overflow: 'hidden',
  },
});


function CartScreen(props) {
  const { classes } = props;
  return (
    <div>
      <main className={classes.content}>
        <ExpansionList />
      </main>
    </div>
  );
}

CartScreen.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(CartScreen);
