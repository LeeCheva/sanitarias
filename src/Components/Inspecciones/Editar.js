import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Header from '../UI/Header';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 250,
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
    width: 500
  },
  Txt: {
  	margin: 50
  }
}));

class Nuevo extends React.Component {

	
	render() {
	
		const { handleDrawerToggle } = this.props;
		
	return(
		<React.Fragment>
		<Header onDrawerToggle={handleDrawerToggle} Titulo={"Editar Inspeccion Sanitaria"} />
		<form className={useStyles.root} noValidate autoComplete="off">
		<div className={useStyles.Txt}><TextField id="standard-basic" label="Equipo" /></div>
		<div className={useStyles.Txt}><TextField id="standard-basic" label="Numero de Informe" /></div>
		<div className={useStyles.Txt}><TextField id="standard-basic" label="Fecha de Inicio" /></div>
		<div className={useStyles.Txt}><TextField id="standard-basic" label="Nombre del Establecimiento" /></div>
		<div className={useStyles.Txt}><TextField id="standard-basic" label="Dueño del Local" /></div>
		<div className={useStyles.Txt}><TextField id="standard-basic" label="Nombre del Inspector" /></div>
    <div className={useStyles.Txt}><TextField id="standard-basic" label="Tipo de Inspeccion" /></div>
    <div className={useStyles.Txt}><TextField id="standard-basic" label="Programa" /></div>
    <div className={useStyles.Txt}><TextField id="standard-basic" label="Direccion" /></div>
    <div className={useStyles.Txt}><TextField id="standard-basic" label="Departamento" /></div>
    <div className={useStyles.Txt}><TextField id="standard-basic" label="Distrito" /></div>
    <div className={useStyles.Txt}><TextField id="standard-basic" label="Provincia" /></div>
    <div className={useStyles.Txt}><TextField id="standard-basic" label="Estado" /></div>
    <div className={useStyles.Txt}><TextField id="standard-basic" label="DNI. Inspector" /></div>
    <div className={useStyles.Txt}><TextField id="standard-basic" label="RUC. Establecimiento" /></div>
		<div className={useStyles.Txt}><TextField id="standard-basic" label="Observacion" /></div>
		<div>
      <input type='submit' value="Enviar Datos"/>
        </div>
		</form>
		</React.Fragment>
		)
}
}

export default Nuevo;