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

class DialogForm extends Component {
  // eslint-disable-next-line
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { fullScreen, handleClose, open, item } = this.props;

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
            value={item.selected.tipus.nom}
          />
          <TextField
            autoFocus
            margin="dense"
            id="quantitat"
            label="Quantitat:"
            type="quantitat"
            fullWidth
            value={item.selected.quantitat}
          />
          <TextField
            autoFocus
            margin="dense"
            id="preu"
            label="Preu:"
            type="preu"
            fullWidth
            value={item.selected.tipus.preu}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

DialogForm.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(DialogForm);
