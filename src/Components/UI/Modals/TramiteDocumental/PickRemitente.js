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
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

import SearchIcon from '@material-ui/icons/Search';

import CardHeaderWithIcon from '../../CardHeaderWithIcon'



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
  cvButton: {
    marginTop: "1.1em"
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  }
})





class PickRemitente extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Procedimientos: [
        {
          Denominacion: 'Lorem',
          Pago: 4.20,
          Plazo: "20 días"
        }
      ],
      Tipo: 10,
      TipoDocumento: 10
    }
  }

  render() {
    const { classes } = this.props;
    return(
      <CloseableDialog handleClose={this.props.handleClose} isOpen={this.props.isOpen} title="Administración de Remitentes"  content={(props) => {
        return(
            <div>
              {/*<SearchBar />*/}
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <SearchIcon />
                </Grid>
                <Grid item xs={10}>
                   <TextField id="input-with-icon-grid" label="Remitente" fullWidth={true} />
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Buscar
                  </Button>
                </Grid>
              </Grid>

              <p>&nbsp;</p>
              

                <Table  aria-label="simple table">
                  <TableHead className={classes.headTable}>
                    <TableRow>
                      <TableCell align="center" className={classes.lightText}>Tipo</TableCell>
                      <TableCell align="center" className={classes.lightText}>Filtro</TableCell>
                      <TableCell align="center" className={classes.lightText}>Documento</TableCell>
                      <TableCell align="center" className={classes.lightText}>Nombre</TableCell>
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
                          <a href="#">Seleccionar</a>
                         </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

              <CardHeaderWithIcon icon="far fa-file-alt" title="Agregar Remitente" />
              <hr />

              <Grid container spacing={1} alignItems="flex-end">

                <Grid item>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Tipo:</InputLabel>
                    <Select
                      id="demo-simple-select"
                      value={this.state.Tipo}>
                      <MenuItem value={10}>Persona juridica</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Tipo:</InputLabel>
                    <Select
                      id="demo-simple-select"
                      value={this.state.TipoDocumento}>
                      <MenuItem value={10}>DNI</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item>
                  <TextField id="input-with-icon-grid" label="Nro. Documento"  />
                  <Button variant="contained" color="primary" className={classes.cvButton}>
                    <i className="fas fa-search"></i>
                  </Button>
                </Grid>

                <Grid item xs={6}>
                  <TextField id="input-with-icon-grid" label="Nombres y Apellidos" fullWidth  />
                </Grid>

                <Grid item xs={2}>
                  <TextField id="input-with-icon-grid" label="Teléfono" fullWidth  />
                </Grid>

                <Grid item xs={4}>
                  <TextField id="input-with-icon-grid" label="Dirección" fullWidth  />
                </Grid>

                <Grid item xs={4}>
                  <TextField id="input-with-icon-grid" label="Email" fullWidth  />
                </Grid>

                <Grid item>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Entidad:</InputLabel>
                    <Select
                      id="demo-simple-select"
                      value={this.state.TipoDocumento}>
                      <MenuItem value={10}>DNI</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={4}>
                  <TextField id="input-with-icon-grid" label="Área" fullWidth  />
                </Grid>

                <Grid item xs={4}>
                  <TextField id="input-with-icon-grid" label="Cargo" fullWidth  />
                </Grid>

                <Grid item xs={2}>
                  <Button variant="contained"><i className={`fas fa-save ${classes.extendedIcon}`}></i> Guardar</Button>
                </Grid>

                <Grid item xs={2}>
                  <Button variant="contained" color="secondary" onClick={this.props.handleClose}><i className={`fas fa-times ${classes.extendedIcon}`}></i> Cancelar</Button>
                </Grid>

              </Grid>


            </div>
        )
      }} />
    )
  }
}

PickRemitente.propTypes = {
  classes: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default withStyles(styles)(PickRemitente);