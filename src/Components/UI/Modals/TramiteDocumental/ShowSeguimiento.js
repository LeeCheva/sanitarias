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
  }
})





class PickTUPA extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
      <CloseableDialog handleClose={this.props.handleClose} isOpen={this.props.isOpen} title="Seguimiento"  content={(props) => {
        return(
            <div>          
              <Grid item xs={12}>
                <Table  aria-label="simple table">
                  <TableHead className={classes.headTable}>
                    <TableRow>
                      <TableCell align="center" className={classes.lightText}>Fecha</TableCell>
                      <TableCell align="center" className={classes.lightText}>Dependencia</TableCell>
                      <TableCell align="center" className={classes.lightText}>Personal</TableCell>
                      <TableCell align="center" className={classes.lightText}>Estado</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.Procedimientos.map(Procedimiento => (
                      <TableRow key={Procedimiento.Denominacion}>
                         <TableCell align="center">{Procedimiento.Denominacion}</TableCell>
                         <TableCell align="center">S/.{Procedimiento.Pago}</TableCell>
                         <TableCell align="center">{Procedimiento.Plazo}</TableCell>
                         <TableCell align="center">{Procedimiento.Plazo}</TableCell>
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

PickTUPA.propTypes = {
  classes: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default withStyles(styles)(PickTUPA);