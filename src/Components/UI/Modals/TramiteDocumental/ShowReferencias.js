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

//Hack Año
const thisYear = new Date().getFullYear();
let Year = thisYear;
let YearOptions = new Array();
for(let xy = 0; xy<3; xy++) {
  YearOptions.push(Year);
  Year--;
}





class Referencias extends Component {
  constructor(props) {
    super(props)
    //
    this.handleStatusDocumento = this.handleStatusDocumento.bind(this)
    this.handleYear = this.handleYear.bind(this)
    this.handleTipoDocumento = this.handleTipoDocumento.bind(this)
    //
    this.state = {
      StatusDocumento: 10,
      Year: new Date().getFullYear(),
      TipoDocumento: 10,
      Adjuntos: [
        {
          Descripcion: 'Lorem',
          Archivo: "HelloWorld.txt"
        }
      ]
    }
  }

  handleStatusDocumento(e) {
    this.setState({
      TipoDocumento: e.target.value
    })
  }

  handleYear(e) {
    this.setState({
      Year: e.target.value
    })
  }

  handleTipoDocumento(e) {
    this.setState({
      TipoDocumento: e.target.value
    })
  }

  render() {
    const { classes } = this.props;
    return(
      <CloseableDialog handleClose={this.props.handleClose} isOpen={this.props.isOpen} title="Documentos Referenciados"  content={(props) => {
        return(
            <div>

              <Grid item xs={12}>
                <Table  aria-label="simple table">
                  <TableHead className={classes.headTable}>
                    <TableRow>
                      <TableCell align="center" className={classes.lightText}>Nro. Documento</TableCell>
                      <TableCell align="center" className={classes.lightText}>Asunto</TableCell>
                      <TableCell align="center" className={classes.lightText}>Ver</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.Adjuntos.map(Adjunto => (
                      <TableRow key={Adjunto.Denominacion}>
                         <TableCell align="center">{Adjunto.Descripcion}</TableCell>
                         <TableCell align="center">{Adjunto.Archivo}</TableCell>
                         <TableCell align="center">
                          <Button color="primary" variant="outlined">
                            <i className="far fa-eye"></i>
                          </Button>
                          <Button color="primary" variant="outlined">
                            <i className="far fa-file-pdf"></i>
                          </Button>
                         </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Grid>

              <br />
              <h2>Detalle del Documento</h2>
              {/*<SearchBar />*/}

              <Grid container spacing={1} alignItems="flex-end">
                {/* Status Documento */}
                <Grid item xl={2}>
                  <TextField id="input-nro-documento" label="Tipo" fullWidth={true} />
                </Grid>

                {/* Año Documento */}
                <Grid item xl={2}>
                  <TextField id="input-nro-documento" label="Fecha" fullWidth={true} />
                </Grid>

                {/* Tipo Documento */}
                <Grid item xl={2}>
                  <TextField id="input-nro-documento" label="Fuente" fullWidth={true} />
                </Grid>

                {/* Nro. Documento */}
                <Grid item xl={2}>
                  <TextField id="input-nro-documento" label="Prioridad" fullWidth={true} />
                </Grid>

                {/* Nro. Expediente */}
                <Grid item xl={2}>
                  <TextField id="input-nro-expediente" label="Proc. TUPA" fullWidth={true} />
                </Grid>

                <Grid item xl={2}>
                  <TextField id="input-nro-expediente" label="Emisor" fullWidth={true} />
                </Grid>

                <Grid item xl={2}>
                  <TextField id="input-nro-expediente" label="Destino" fullWidth={true} />
                </Grid>

                {/* Asunto */}
                <Grid item xl={10}>
                  <TextField id="input-nro-expediente" label="Asunto" fullWidth={true} />
                </Grid>

                <Grid item xl={12}>
                  <TextField id="input-nro-expediente" label="Observaciones" fullWidth={true} />
                </Grid>

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