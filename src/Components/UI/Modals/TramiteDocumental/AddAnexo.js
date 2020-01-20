import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';


import CloseableDialog from '../../CloseableDialog'

import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import SearchIcon from '@material-ui/icons/Search';

import { DatePicker } from "@material-ui/pickers";



//import SearchBar from 'material-ui-search-bar'






const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  headTable: {
    background: '#2c3e50'
  },
  lightText: {
    color: '#ecf0f1'
  },
  optionIcon: {
    paddingRight: "10px"
  }
})





class AddAnexo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Fecha: new Date(),
      Procedimientos: [
        {
          Denominacion: 'Lorem',
          Pago: 4.20,
          Plazo: "20 días"
        }
      ]
    }
  }

  render() {
    const { classes } = this.props;
    return(
      <CloseableDialog handleClose={this.props.handleClose} isOpen={this.props.isOpen} title="Anexos"  content={(props) => {
        return(
            <div>
              {/*<SearchBar />*/}

              <Grid container spacing={1} alignItems="flex-end">
                <Grid item xl={2}>
                  <TextField id="input-with-icon-grid" label="Descripción" fullWidth={true} />
                </Grid>
                <Grid item xl={2}>
                  <TextField id="input-with-icon-grid" label="Número" fullWidth={true} />
                </Grid>
                <Grid item xl={2}>
                  <DatePicker value={this.state.Fecha} onChange={this.handleDesde} variant="inline" label="Fecha" />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="Asunto" fullWidth={true} />
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" onClick={this.props.handleClose}><i className={`fas fa-plus-circle ${classes.extendedIcon}`}></i> Agregar nuevo anexo</Button>
                </Grid>
              </Grid>

              <br />

              <Grid item xs={12}>
                <Table  aria-label="simple table">
                  <TableHead className={classes.headTable}>
                    <TableRow>
                      <TableCell align="center" className={classes.lightText}>Descripción</TableCell>
                      <TableCell align="center" className={classes.lightText}>Número</TableCell>
                      <TableCell align="center" className={classes.lightText}>Fecha</TableCell>
                      <TableCell align="center" className={classes.lightText}>Asunto</TableCell>
                      <TableCell align="center" className={classes.lightText}>Acciones</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.Procedimientos.map(Procedimiento => (
                      <TableRow key={Procedimiento.Denominacion}>
                         <TableCell align="center">{Procedimiento.Denominacion}</TableCell>
                         <TableCell align="center">S/.{Procedimiento.Pago}</TableCell>
                         <TableCell align="center">{Procedimiento.Plazo}</TableCell>
                         <TableCell align="center">{Procedimiento.Plazo}</TableCell>
                         <TableCell align="center">
                          <a href="#" className={classes.optionIcon}><i className="fas fa-arrow-circle-up fa-2x"></i></a>
                          <a href="#" className={classes.optionIcon}><i className="far fa-file-pdf fa-2x"></i></a>
                          <a href="#" className={classes.optionIcon}><i className="fas fa-minus-circle fa-2x"></i></a>
                         </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Grid>
            </div>
        )
      }} />
    )
  }
}

AddAnexo.propTypes = {
  classes: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default withStyles(styles)(AddAnexo);