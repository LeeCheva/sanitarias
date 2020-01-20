import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Header from '../UI/Header';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';



class Importar extends React.Component {  
	render() {	
		const { handleDrawerToggle } = this.props;		 
		return(
			<React.Fragment>
			<Header onDrawerToggle={handleDrawerToggle} Titulo={"Inspecciones Sanitarias"}  opt={"inspe_sani_imp"}/>
			importar
			</React.Fragment>
			)
	}
}

export default Importar;