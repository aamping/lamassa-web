import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import SearchApp from '../components/SearchApp';
import MediaCard from '../components/MediaCard';
import CategoriesBar from '../components/CategoriesBar';

const styles = theme => ({
  content: {
    width: 'inherit',
    // flexGrow: 1,
    paddingTop: 24,
    marginTop: 56,
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: 54,
    },
    // overflow: 'hidden',
  },
});


function ListScreen(props) {
  const { classes } = props;
  return (
    <div style={{ width: '-webkit-fill-available' }}>
      <main className={classes.content}>
        <SearchApp />
        <Grid
          container
        >
          <Hidden smDown>
            <Grid item md={1} lg={2}>
              <Hidden mdDown>
                <CategoriesBar />
              </Hidden>
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={12} md={10} lg={10}>
            <MediaCard />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

ListScreen.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ListScreen);
