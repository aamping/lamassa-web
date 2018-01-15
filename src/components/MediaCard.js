import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

const totalQuantitat = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    maxWidth: 200,
    maxHeight: 200,
    flex: 1
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

class MediaCard extends Component {
  state = {
    quantitat: 0,
    tipus: ' ',
  };


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes, data } = this.props;
    return (
      <Grid container
        alignItems={'center'}
        spacing={40}
        direction={'row'}
        justify={'center'}
      >
      {data.map(value => (
        <Grid item key={value}>
          <Card className={classes.card}>
            <CardHeader
              action={
                <CardActions disableActionSpacing>
                  <IconButton aria-label="Add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="Share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              }
              title={<div className={classes.text}>{value.title}</div>}
              subheader={
                <div style={{ display: 'flex' }}>
                  <Typography type='button'><a className={classes.text} href="http://www.yahoo.com"> {value.productor}</a></Typography>
                  <MessageIcon style={{ marginLeft: 10 }}/>
                </div>
              }
            />
            <div className={classes.div}>
              <img alt='' src={value.img} className={classes.media}/>
              <CardContent>
                <Typography>
                  {value.text}
                </Typography>
              </CardContent>
            </div>
            <CardActions className={classes.container} disableActionSpacing>
              <FormControl className={classes.formControl}>
                <Select
                  native
                  value={this.state.quantitat}
                  onChange={this.handleChange('quantitat')}
                  className={classes.selectEmpty}
                >
                  {totalQuantitat.map(value => (
                    <option value={value}>{value}</option>
                  ))}
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <Select
                  native
                  value={this.state.tipus}
                  onChange={this.handleChange('tipus')}
                  className={classes.selectEmpty}
                >
                  {value.options.map(value => (
                    <option value={value.preu}>{value.preu + ' - ' + value.tipus}</option>
                  ))}
                </Select>
              </FormControl>
              <Button dense raised color="default">
                <ShoppingCartIcon />
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
      </Grid>
    );
  }
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
