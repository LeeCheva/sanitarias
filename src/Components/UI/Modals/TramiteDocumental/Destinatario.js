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

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
                      
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
  },
  optionIcon: {
    paddingRight: "10px"
  }
})



class Referencias extends Component {
  constructor(props) {
    super(props)
    //
    this.handleDependencia = this.handleDependencia.bind(this)
    this.handlePersonal = this.handlePersonal.bind(this)
    this.handlePrioridad = this.handlePrioridad.bind(this)
    //Externo
    this.handleTipo = this.handleTipo.bind(this)
    //
    this.state = {
      PersonalDependencia: 10,
      PersonalPersonal: 10,
      PersonalPrioridad: 10,
      Adjuntos: [
        {
          Descripcion: 'Lorem',
          Archivo: "HelloWorld.txt"
        }
      ],
      ExternoTipo: 10
    }
  }

  handleDependencia(e) {
    this.setState({
      PersonalDependencia: e.target.value
    })
  }

  handlePersonal(e) {
    this.setState({
      PersonalPersonal: e.target.value
    })
  }

  handlePrioridad(e) {
    this.setState({
      PersonalPrioridad: e.target.value
    })
  }

  handleTipo(e) {
    this.setState({
      ExternoTipo: e.target.value
    })
  }

  render() {
    const { classes } = this.props;
    return(
      <CloseableDialog handleClose={this.props.handleClose} isOpen={this.props.isOpen} title="Destinatario"  content={(props) => {
        return(
            <div>
              {/*<SearchBar />*/}
              <h2>Personal</h2>
              <Grid container spacing={1} alignItems="flex-end">
                {/* Status Documento */}
                <Grid item xl={2}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Dependencia:</InputLabel>
                    <Select value={this.state.PersonalDependencia} onChange={this.handleDependencia}>
                      <MenuItem value={10}>Emitido</MenuItem>
                      <MenuItem value={20}>Recibidio</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Año Documento */}
                <Grid item xl={2}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Personal:</InputLabel>
                    <Select value={this.state.PersonalPersonal} onChange={this.handlePersonal}>
                      <MenuItem value={10}>Pepito Perez</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Tipo Documento */}
                <Grid item xl={2}>
                  <FormControl className={classes.formControl}>
                    <InputLabel>Prioridad:</InputLabel>
                    <Select value={this.state.PersonalPrioridad} onChange={this.handlePrioridad}>
                      <MenuItem value={10}>Normal</MenuItem>
                      <MenuItem value={20}>Urgente</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Nro. Documento */}
                <Grid item xl={4}>
                  <TextField id="input-nro-documento" label="Observaciones" fullWidth={true} />
                </Grid>



                <Grid item>
                  <Button variant="contained" color="primary" onClick={this.props.handleClose}><i className={`fas fa-plus-circle ${classes.extendedIcon}`}></i> Añadir</Button>
                </Grid>
              </Grid>

              <br />

              <Grid item xs={12}>
                <Table  aria-label="simple table">
                  <TableHead className={classes.headTable}>
                    <TableRow>
                      <TableCell align="center" className={classes.lightText}>Dependencia</TableCell>
                      <TableCell align="center" className={classes.lightText}>Personal</TableCell>
                      <TableCell align="center" className={classes.lightText}>Prioridad</TableCell>
                      <TableCell align="center" className={classes.lightText}>Observaciones</TableCell>
                      <TableCell align="center" className={classes.lightText}>Acciones</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.Adjuntos.map(Adjunto => (
                      <TableRow key={Adjunto.Denominacion}>
                         <TableCell align="center">{Adjunto.Descripcion}</TableCell>
                         <TableCell align="center">{Adjunto.Archivo}</TableCell>
                         <TableCell align="center">{Adjunto.Archivo}</TableCell>
                         <TableCell align="center">{Adjunto.Archivo}</TableCell>
                         <TableCell align="center">
                          <Button color="secondary" variant="outlined">
                            <i className="fas fa-minus-circle"></i>
                          </Button>
                         </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Grid>

              {/* Externo */}
              <h2>Externo</h2>
              <Grid container spacing={1} alignItems="flex-end">
                {/* Status Documento */}
                <Grid item xl={2}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Tipo:</InputLabel>
                    <Select value={this.state.ExternoTipo} onChange={this.handleDependencia}>
                      <MenuItem value={10}>Ciudadano</MenuItem>
                      <MenuItem value={20}>Recibidio</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Año Documento */}
                <Grid item xl={2}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Personal:</InputLabel>
                    <Select value={this.state.Personal} onChange={this.handlePersonal}>
                      <MenuItem value={10}>Pepito Perez</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Tipo Documento */}
                <Grid item xl={2}>
                  <FormControl className={classes.formControl}>
                    <InputLabel>Prioridad:</InputLabel>
                    <Select value={this.state.Prioridad} onChange={this.handlePrioridad}>
                      <MenuItem value={10}>Normal</MenuItem>
                      <MenuItem value={20}>Urgente</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Nro. Documento */}
                <Grid item xl={4}>
                  <TextField id="input-nro-documento" label="Observaciones" fullWidth={true} />
                </Grid>



                <Grid item>
                  <Button variant="contained" color="primary" onClick={this.props.handleClose}><i className={`fas fa-plus-circle ${classes.extendedIcon}`}></i> Añadir</Button>
                </Grid>
              </Grid>

              <br />

              <Grid item xs={12}>
                <Table  aria-label="simple table">
                  <TableHead className={classes.headTable}>
                    <TableRow>
                      <TableCell align="center" className={classes.lightText}>Dependencia</TableCell>
                      <TableCell align="center" className={classes.lightText}>Personal</TableCell>
                      <TableCell align="center" className={classes.lightText}>Prioridad</TableCell>
                      <TableCell align="center" className={classes.lightText}>Observaciones</TableCell>
                      <TableCell align="center" className={classes.lightText}>Acciones</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.Adjuntos.map(Adjunto => (
                      <TableRow key={Adjunto.Denominacion}>
                         <TableCell align="center">{Adjunto.Descripcion}</TableCell>
                         <TableCell align="center">{Adjunto.Archivo}</TableCell>
                         <TableCell align="center">{Adjunto.Archivo}</TableCell>
                         <TableCell align="center">{Adjunto.Archivo}</TableCell>
                         <TableCell align="center">
                          <Button color="secondary" variant="outlined">
                            <i className="fas fa-minus-circle"></i>
                          </Button>
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

Referencias.propTypes = {
  classes: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default withStyles(styles)(Referencias);