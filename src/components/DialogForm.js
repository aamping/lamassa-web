import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,// eslint-disable-next-line
  withMobileDialog,
} from 'material-ui/Dialog';

import StepperCart from './StepperCart';

const styles = {
  containerTextImg: {
    display: 'flex',
  },
  img: {
    maxHeight: 200,
    padding: 30,
  },
}

class DialogForm extends Component {
  state = {
    open: false,
    entrega: '',
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => event => {
    console.log(event.target.value);
    this.setState({
      [name]: event.target.value,
    });
  }

  render() {
    const { fullScreen, handleClose, open, item, selected } = this.props;
    const entrega = {
      dia: ['Dilluns 17', 'Dilluns 23', 'Dilluns 29'],
      hora: ['13:00-14:00', '19:00-20:00'],
      frequencia: ['una sola vegada', 'cada 2 setmanes', 'cada 4 setmanes'],
    };

    return (
      <Dialog
        fullScreen={fullScreen}
        open={open ? open : false}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Nova Comanda: "}</DialogTitle>
        <DialogContent>
          <DialogContentText />
          <div style={styles.containerTextImg}>
            <div>
              <TextField
                autoFocus
                margin="dense"
                id="producte"
                label="Producte:"
                type="producte"
                fullWidth
                value={item.nom}
              />
              <TextField
                autoFocus
                margin="dense"
                id="tipus"
                label="Format:"
                type="tipus"
                value={selected.tipus ? (selected.tipus.nom + ` (${selected.tipus.preu} €)`) : null}
              />
              <TextField
                autoFocus
                margin="dense"
                id="quantitat"
                label="Quantitat:"
                type="quantitat"
                fullWidth
                value={selected.quantitat}
              />
              <TextField
                autoFocus
                margin="dense"
                id="preu"
                label="Preu Total:"
                type="preu"
                fullWidth
                value={selected.tipus ? (selected.tipus.preu * selected.quantitat) : null}
              />
            </div>
            <img alt='' src='/item_espelta.jpg' style={styles.img} />
          </div>
        <StepperCart
          data={entrega}
          submit={this.addCart}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel·la
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
  addCart = (entrega) => {
    const { item, selected } = this.props;
    const comanda = { ...selected, ...entrega, preuTotal: (selected.tipus.preu * selected.quantitat) };
    this.props.submitForm(item, comanda);
    this.props.handleClose();
  }
}

DialogForm.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(DialogForm);
