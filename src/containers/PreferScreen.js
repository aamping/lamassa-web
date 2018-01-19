import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SearchApp from '../components/SearchApp';
import MediaCard from '../components/MediaCard';

const styles = theme => ({
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: '#f7ecb5',
    paddingTop: 24,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    }
  }
});


function PreferScreen(props) {
  const { classes } = props;
  return(
    <div>
      <main className={classes.content}>
        <SearchApp />
        <MediaCard isFavorites />
      </main>
    </div>
  );
}

PreferScreen.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PreferScreen);
