import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import StarRatingComponent from 'react-star-rating-component';
import Select from 'material-ui/Select';

const styles = {
  card: {
    // maxWidth: 700,
  },
  media: {
    // height: 400,
  },
};

class SimpleMediaCard extends Component {
  state = {
    quantitat: 0,
    tipus: "weke",
  }
  render() {
    const formats = [{ preu: 0, nom: "weke" }, { preu: 0, nom: "weke" }];
    const totalQuantitat = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const { classes, producte } = this.props;
    return (
      <div>
        <Card className="card-review-product">
          <CardMedia
            className="image-review-card"
            image={`http://lamassa.org${producte.foto}`}
            title={producte.nom}
          />
          <CardContent>
            <div className="cards-title">
              {producte.nom}
            </div>
            <div className="cards-subtitle">
              {producte.productor.nom}
            </div>
            <div style={{ fontSize: 20 }}>
              <StarRatingComponent
                name="rate"
                editing={false}
                starCount={5}
                value={3}
              />
            </div>
            <Typography component="p">
              {producte.text_curt}
            </Typography>
            <div className="form-card-select-product" style={{ marginRight: 50}}>
              <Select
                native
                value={this.state.quantitat}
                onChange={""}
                className="cards-selector-text"
              >
                {totalQuantitat.map(value => (
                  <option className="cards-selector-text" key={value} value={value}>{value}</option>
                ))}
              </Select>
              <Select
                native
                value={this.state.tipus}
                onChange={""}
                className="cards-selector-text"
              >
                {formats.map((value, index) => (
                  <option className="cards-selector-text" key={value.nom} value={index}>{value.preu + ' € - ' + value.nom}</option>
                ))}
              </Select>
            </div>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
