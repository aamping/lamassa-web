import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import SimpleMediaCard from '../components/SimpleMediaCard';

const styles = theme => ({
  content: {
    width: 'inherit',
    // flexGrow: 1,
    padding: 24,
    marginTop: 56,
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: 54,
    },
    // overflow: 'hidden',
  },
});


function ProducteScreen(props) {
  const { classes, data, location, reviewProduct, productsProducer } = props;
  return (
    <div className={classes.content} style={{ width: '-webkit-fill-available' }}>
      <SimpleMediaCard producte={reviewProduct} productsProducer={productsProducer} />
    </div>
  );
}

ProducteScreen.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const mapStateToProps = ({ api }) => {
  const { reviewProduct, productsProducer } = api;
  return { reviewProduct, productsProducer };
};

export default compose(
  withStyles(styles, {
    withTheme: true,
    name: 'ProducteScreen',
  }),
  connect(mapStateToProps, null),
)(ProducteScreen);
