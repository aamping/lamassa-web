import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SearchApp from '../components/SearchApp';

const styles = theme => ({
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: '#f7ecb5',
    padding: 24,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    }
  }
});


function ListScreen(props) {
  const { classes } = props;
  return(
    <div>
      <main className={classes.content}>
        <SearchApp />
      </main>
    </div>
  );
}


ListScreen.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ListScreen);
