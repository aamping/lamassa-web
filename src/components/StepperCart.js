import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Select from 'material-ui/Select';

const styles = theme => ({
  root: {
    width: '90%',
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "Selecciona data d'entrega:";
    case 1:
      return 'Franja horària:';
    case 2:
      return 'I freqüència:';

    default:
      return 'Defecte';
  }
}

class StepperCart extends Component {
  state = {
    activeStep: 0,
    dia: '',
    hora: '',
    frequencia: '',
    error: '',
    steps: [
      "Dia d'entrega del producte",
      'Franja horària disponible',
      'Freqüència de la comanda'],
  };

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1,
      error: '',
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  handleChange = name => event => {
    const { steps, activeStep } = this.state;
    steps[activeStep] = event.target.value;
    this.setState({
      steps,
      [name]: event.target.value,
    });
  }

  handleEmptySelection = () => {
    this.setState({
      error: 'red'
    })
  }

  handleSubmit = () => {
    const { dia, hora, frequencia } = this.state;
    this.props.submit({ dia, hora, frequencia });
  }

  render() {
    const { classes, data } = this.props;
    const { activeStep, steps } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {this.state.activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                Comproba que les dades siguin correctes i confirma la comanda:
              </Typography>
              <Button onClick={this.handleReset}>Torna</Button>
              <Button raised color="primary" onClick={this.handleSubmit}>
                Confirmar
              </Button>
            </div>
          ) : ( this.state.activeStep === 0 ?
          (<div>
              <Typography style={{ color: this.state.error }} className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div style={{display: 'flex'}}>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.backButton}
                >
                  Enrere
                </Button>
                <Select
                  style={{ marginRight: 20 }}
                  native
                  fullWidth
                  value={this.state.dia}
                  onChange={this.handleChange('dia')}
                >
                  <option value="" />
                  {data.dia.map((value, index) => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </Select>
                <Button raised color="primary" onClick={this.state.dia ? this.handleNext : this.handleEmptySelection}>
                  {activeStep === steps.length - 1 ? 'Acabar' : 'Següent'}
                </Button>
              </div>
            </div>)
          : ( this.state.activeStep === 1 ?
          (<div>
              <Typography style={{ color: this.state.error }} className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div style={{ display: 'flex' }}>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.backButton}
                >
                  Enrere
                </Button>
                <Select
                  native
                  style={{ marginRight: 20 }}
                  fullWidth
                  value={this.state.hora}
                  onChange={this.handleChange('hora')}
                >
                  <option value="" />
                  {data.hora.map((value, index) => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </Select>
                <Button raised color="primary" onClick={this.state.hora ? this.handleNext : this.handleEmptySelection}>
                  {activeStep === steps.length - 1 ? 'Acabar' : 'Següent'}
                </Button>
              </div>
            </div>)
          :  (<div>
              <Typography style={{ color: this.state.error }} className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div style={{ display: 'flex' }}>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.backButton}
                >
                  Enrere
                </Button>
                <Select
                  style={{ marginRight: 20 }}
                  native
                  fullWidth
                  value={this.state.frequencia}
                  onChange={this.handleChange('frequencia')}
                >
                  <option value="" />
                  {data.frequencia.map((value, index) => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </Select>
                <Button raised color="primary" onClick={this.state.frequencia ? this.handleNext : this.handleEmptySelection}>
                  {activeStep === steps.length - 1 ? 'Acabar' : 'Següent'}
                </Button>
              </div>
            </div>)
          ))}
        </div>
      </div>
    );
  }
}

StepperCart.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(StepperCart);
