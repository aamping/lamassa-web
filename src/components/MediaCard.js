import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShoppingCartIcon from 'material-ui-icons/ShoppingCart';
import ShareIcon from 'material-ui-icons/Share';
import MessageIcon from 'material-ui-icons/Message';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Select from 'material-ui/Select';
import { FormControl } from 'material-ui/Form';
import { ListItemIcon } from 'material-ui/List';
import StarRatingComponent from 'react-star-rating-component';
import { addFavorites } from '../actions/userActions';
import { addToCart } from '../actions/userActions';
import DialogForm from './DialogForm';

const totalQuantitat = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const styles = theme => ({
  card: {
    width: 380,
    height: 300
  },
  media: {
    maxWidth: 300,
    height: 150
  },
  tipus: {
    flex: 'auto'
  },
  container: {
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 50
  },
  selectEmpty: {
    marginLeft: 10
  },
  button: {
    margin: theme.spacing.unit,
  },
  text: {
    textDecoration: 'none',
    color: '#508a4c',
    fontFamily: 'Satisfy',
    fontSize: 'larger'
  },
  div: {
    display: 'flex',
    flexGrow: 1
  }
});

const url = 'https://lamassa.org';

class MediaCard extends Component {
  componentWillMount() {
    this.setState({
      openDialogCart: [],
      quantitat: [],
      tipus: [],
    });
  }


  handleDialogForm({ openDialogCart }) {
    this.setState({ openDialogCart });
  }

  handleAddFavorites(itemPk) {
    const { favorites } = this.props;
    this.props.addFavorites({ favorites, itemPk });
  }

  handleChange = (name, index) => event => {
    const element = this.state[name];
    element[index] = event.target.value;
    this.setState({
      element,
    });
  }
  handleAddCart(item, comanda) {
    const { cart } = this.props;
    this.props.addToCart(item, comanda, cart);
  }
// <CardActions disableActionSpacing>
  render() {
    const { classes, data, favorites, isFavorites } = this.props;
    return (
      <Grid container
        alignItems={'center'}
        spacing={40}
        direction={'row'}
        justify={'center'}
      >
      {data.map((value, index) => {
        if (!isFavorites || favorites.includes(value.pk)) {
          return (
            <Grid item key={value.nom}>
              <Card className={classes.card}>
                <CardHeader
                  style={{paddingBottom: 5}}
                  action={
                    <div>
                    <div>
                      <IconButton onClick={() => this.handleAddFavorites(value.pk)} aria-label="Afegir a preferits">
                        <FavoriteIcon style={favorites.includes(value.pk) ? { color: '#f6a828' } : {color: 'grey' }} />
                      </IconButton>
                      <IconButton aria-label="Share">
                        <ShareIcon />
                      </IconButton>
                      </div>
                    <div style={{ fontSize: 20 }}>
                      <StarRatingComponent
                        name="rate"
                        editing={false}
                        starCount={5}
                        value={3}
                      />
                    </div>
                    </div>
                  }
                  title={
                    <div className={classes.text}>
                      {value.nom}
                      <ListItemIcon>
                        <img style={{ marginLeft: 10 }} alt='' src={url+value.etiqueta.img} />
                      </ListItemIcon>
                    </div>
                  }
                  subheader={
                    <div style={{ display: 'flex' }}>
                      <Typography type='button'><a className={classes.text} href="http://www.yahoo.com"> {value.productor.nom}</a></Typography>
                      <MessageIcon style={{ marginLeft: 10 }}/>
                    </div>
                  }
                />
                <div className={classes.div}>
                  <img alt='' src={url+value.thumb} href={url + value.foto} className={classes.media}/>
                  <CardContent>
                    <Typography>
                      {value.text_curt}
                    </Typography>
                  </CardContent>
                </div>
                <CardActions className={classes.container} disableActionSpacing>
                  <FormControl className={classes.formControl}>
                    <Select
                      native
                      value={this.state.quantitat[index]}
                      onChange={this.handleChange('quantitat', index)}
                      className={classes.selectEmpty}
                    >
                      {totalQuantitat.map(value => (
                        <option key={value} value={value}>{value}</option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <Select
                      native
                      value={this.state.tipus[index]}
                      onChange={this.handleChange('tipus', index)}
                      className={classes.selectEmpty}
                    >
                      {value.formats.map((value, index) => (
                        <option key={value.nom} value={index}>{value.preu + ' € - ' + value.nom}</option>
                      ))}
                    </Select>
                  </FormControl>
                  <Button
                    raised
                    dense
                    onClick={() => {
                      const { openDialogCart } = this.state;
                      openDialogCart[index] = true;
                      this.handleDialogForm({ openDialogCart });
                    }}
                    color="default">
                    <ShoppingCartIcon style={{ color: 'black' }} />
                  </Button>
                  <DialogForm
                    submitForm={this.handleAddCart.bind(this)}
                    handleClose={() => {
                      const { openDialogCart } = this.state;
                      openDialogCart[index] = false;
                      this.handleDialogForm({ openDialogCart });
                    }}
                    open={this.state.openDialogCart[index]}
                    item={value}
                    selected={{
                      quantitat: !this.state.quantitat[index] ? 1 : this.state.quantitat[index],
                      tipus: !this.state.tipus[index] ? value.formats[0]: value.formats[this.state.tipus[index]],
                    }}
                  />
                </CardActions>
              </Card>
            </Grid>);
          } else { return null; }})}
      </Grid>
    );
  }
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  const { favorites, ts, cart } = state.user;
  return { favorites, ts, cart, data: state.api.filteredMessages };
}

export default compose(
  withStyles(styles, {
    name: 'MediaCard',
  }),
  connect(mapStateToProps, { addFavorites, addToCart }),
)(MediaCard);
