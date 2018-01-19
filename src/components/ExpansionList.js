import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import DeleteIcon from 'material-ui-icons/Delete';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import Chip from 'material-ui/Chip';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.3%',
  },
  chip: {
    marginLeft: 5,
    marginRight: 10,
    height: '24px'
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.text.lightDivider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  img: {
    maxHeight: 150,
    marginRight: 30
  },
  divider: {
  },
  text: {
  }
});

class ExpansionList extends React.Component {
  state = {
    expanded: null,
    tipus: '',
    quantitat: 0
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };
  handleChangeSelection = name => event => {
  this.setState({ [name]: event.target.value });
};

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.column} style={{ display: 'flex' }}>
              <DeleteIcon onClick={() => console.log('weke')} style={{ marginRight: 20 }}/>
              <Typography className={classes.heading}>Location</Typography>
            </div>
            <div className={classes.column} style={{ display: 'flex' }}>
              <Typography className={classes.secondaryHeading}>Quantitat: </Typography>
              <Chip label="1" className={classes.chip} />
              <Typography className={classes.secondaryHeading}>Tipus: </Typography>
              <Chip label="10 € - 1 kg de pa" className={classes.chip} />
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column}>
              <img className={classes.img} alt='' src='/item_espelta.jpg' />
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>Select trip destination</Typography>
            </div>
            <div className={classNames(classes.column, classes.helper)}>
              <div style={{ display: 'flex', flex: 1, justifyContent: 'right', alignItems: 'right' }}>
                <InputLabel htmlFor="age-native-simple">Quantitat</InputLabel>
                <Select
                  native
                  value={this.state.quantitat}
                  onChange={this.handleChangeSelection('quantitat')}
                  input={<Input id="age-native-simple" />}
                >
                  <option value="0" />
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </Select>
              </div>
              <div>
                <InputLabel htmlFor="age-native-simple">Tipus</InputLabel>
                <Select
                  native
                  value={this.state.tipus}
                  onChange={this.handleChangeSelection('tipus')}
                  input={<Input id="age-native-simple" />}
                >
                  <option value="0" />
                  <option value={10}>10 € - 1 kg de pa</option>
                  <option value={20}>5 € - 1 kg de pa</option>
                  <option value={30}>2 € - 1 kg de pa</option>
                </Select>
              </div>
            </div>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button dense>Cancel</Button>
            <Button dense color="primary">
              Save
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </div>
    );
  }
}

ExpansionList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExpansionList);
